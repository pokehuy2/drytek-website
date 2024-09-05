'use client'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import ImageUploadCard from "@/app/dashboard/products/add/ImageUploadCard";
import {useForm} from 'react-hook-form';
import { z } from 'zod';
import {ProductSchema} from "@/app/dashboard/products/add/validation";
import {zodResolver} from "@hookform/resolvers/zod";
import {memo, useCallback, useState} from "react";
import {useRouter} from "next/navigation";
import {Product, ProductImage} from "@prisma/client";

type TProductSchema = z.infer<typeof ProductSchema>;

interface AddFormProps {
    categories: { id: string, title: string, description: string | null }[];
    product?: Product
    productImages?: ProductImage[]
}

const ProductForm = ({categories, product, productImages} : AddFormProps) => {
    const router = useRouter();
    const thumbImg = product?.thumbImage
    const productImgs = productImages?.map(img => img.image) || []
    const imgArr = thumbImg ? [thumbImg,...productImgs] : []

    const initialValues = {
        title: "",
        categoryId: categories[0].id,
        // description: "",
        // manufacturer: "",
        // documents: [{documentTitle: "", documentLink: ""},{documentTitle: "", documentLink: ""}],
        // advantages: [{title: "", advantage: ""},{title: "", advantage: ""},{title: "", advantage: ""}]
    }

    console.log({thumbImg})
    console.log({productImgs})
    console.log({imgArr})
    const [productDocumentNumber, setProductDocumentNumber] = useState(2)
    const [images, setImages] = useState<string[]>(imgArr as string[])
    const form = useForm<TProductSchema>({
        resolver: zodResolver(ProductSchema),
        // defaultValues: product ?? initialValues
    });

    const onSubmit = useCallback(async(values: TProductSchema) => {
        console.log({values})

        try{
            const payload = {
                ...values,
            }
            if(images.length > 0){
                if(images.length === 1){
                    payload.thumbImage = images[0]
                }else{
                    payload.thumbImage = images[0];
                    payload.images = images.slice(1).map(img => ({image: img}))
                }
            }
            console.log({payload})
            product ? await fetch('/api/dashboard/products/' + product.id, {method: "PATCH",body: JSON.stringify(payload)}) : await fetch('/api/dashboard/products', {method: "POST", body: JSON.stringify(payload)});
            router.push("/dashboard/products")
            router.refresh()
        } catch(error){
            console.log(error)
        }
    },[images, product, router])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                            <div className="flex items-center gap-4">
                                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                                    Thêm mới sản phẩm
                                </h1>
                                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                                    <Link href="/dashboard/products"><Button variant="outline" size="sm">
                                        Huỷ
                                    </Button></Link>
                                    <Button size="sm" type="submit">Lưu sản phẩm</Button>
                                </div>
                            </div>
                            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                                    <Card x-chunk="dashboard-07-chunk-0">
                                        <CardHeader>
                                            <CardTitle>Thông tin sản phẩm</CardTitle>
                                            <CardDescription>
                                                Điền thông tin cơ bản của sản phẩm
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid gap-6">
                                                <div className="grid gap-3">
                                                    <FormField control={form.control} name="title" render={({field}) => (
                                                        <FormItem>
                                                            <FormLabel>Tên sản phẩm</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="VD: Absorpole" className="w-full" {...field}/>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>)}
                                                    />
                                                </div>
                                                <div className="grid gap-3">
                                                    <FormField control={form.control} name="manufacturer" render={({field}) => (
                                                        <FormItem>
                                                            <FormLabel>Hãng sản xuất</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="VD: Absortech" className="w-full" {...field}/>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>)}
                                                    />
                                                </div>
                                                <div className="grid gap-3">
                                                    <FormField control={form.control} name="description" render={({field}) => (
                                                        <FormItem>
                                                            <FormLabel>Miêu tả sản phẩm</FormLabel>
                                                            <FormControl>
                                                                <Textarea placeholder="Các thuộc tính của sản phẩm" className="min-h-32" {...field}/>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>)}
                                                    />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card x-chunk="dashboard-07-chunk-1">
                                        <CardHeader>
                                            <CardTitle>Nhóm hàng hoá</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div>
                                                <FormField control={form.control} name="categoryId" render={({field}) => (
                                                    <FormItem>
                                                        <FormLabel>Nhóm hàng hoá</FormLabel>
                                                        <FormControl>
                                                            <Select defaultValue={field.value} onValueChange={field.onChange}>
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Chọn nhóm" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    {categories.map((category) => <SelectItem key={category.id} value={category.id}>{category.title}</SelectItem>)}
                                                                </SelectContent>
                                                            </Select>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>)}
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card x-chunk="dashboard-07-chunk-2">
                                        <CardHeader>
                                            <CardTitle>Ưu điểm sản phẩm</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid gap-6">
                                                {Array.from({length: 3}, (_,index) =>
                                                    <div key={index} className="grid gap-3">
                                                        <h3 className="font-bold">Ưu điểm {index+1}</h3>
                                                        <FormField control={form.control}
                                                             name={`advantages.${index}.title`}
                                                             render={({field}) => (
                                                                 <FormItem>
                                                                     <FormControl>
                                                                          <Input
                                                                               placeholder="Tiêu đề"
                                                                               className="w-full" {...field}
                                                                          />
                                                                     </FormControl>
                                                                     <FormMessage />
                                                                 </FormItem>
                                                             )}
                                                        />
                                                        <FormField control={form.control}
                                                             name={`advantages.${index}.advantage`}
                                                             render={({field}) => (
                                                                  <FormItem>
                                                                       <FormControl>
                                                                           <Textarea placeholder="Nội dung" className="min-h-16" {...field}/>
                                                                       </FormControl>
                                                                      <FormMessage />
                                                                  </FormItem>
                                                             )}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                                    <Card x-chunk="dashboard-07-chunk-3">
                                        <CardHeader>
                                            <CardTitle>Trạng thái sản phẩm</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="gap-6">
                                                <div className="gap-3">
                                                    <Label htmlFor="status">Status</Label>
                                                    <Select>
                                                        <SelectTrigger id="status" aria-label="Select status">
                                                            <SelectValue placeholder="Select status"/>
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="draft">Draft</SelectItem>
                                                            <SelectItem value="published">Active</SelectItem>
                                                            <SelectItem value="archived">Archived</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <ImageUploadCard images={images} setImages={setImages} />
                                    <Card x-chunk="dashboard-07-chunk-5">
                                        <CardHeader>
                                            <CardTitle>Tài liệu sản phẩm</CardTitle>
                                            <CardDescription>
                                                Thêm tài liệu cho sản phẩm
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className='grid gap-4'>
                                                {Array.from({length: productDocumentNumber}, (_,index) =>
                                                    <div key={index} className='grid gap-3'>
                                                    <FormField control={form.control}
                                                               name={`documents.${index}.documentTitle`}
                                                               render={({field}) => (
                                                                   <FormItem>
                                                                       <FormLabel>Tiêu đề tài liệu</FormLabel>
                                                                       <FormControl>
                                                                           <Input
                                                                               placeholder=""
                                                                               className="w-full" {...field}
                                                                           />
                                                                       </FormControl>
                                                                       <FormMessage />
                                                                   </FormItem>
                                                               )}
                                                    />
                                                    <FormField control={form.control}
                                                               name={`documents.${index}.documentLink`}
                                                               render={({field}) => (
                                                                   <FormItem>
                                                                       <FormLabel>Đường dẫn tài liệu</FormLabel>
                                                                       <FormControl>
                                                                           <Input
                                                                               placeholder=""
                                                                               className="w-full" {...field}
                                                                           />
                                                                       </FormControl>
                                                                       <FormMessage />
                                                                   </FormItem>
                                                               )}
                                                    />
                                                </div>)}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2 md:hidden">
                                <Button variant="outline" size="sm">
                                    Huỷ
                                </Button>
                                <Button size="sm" type="submit">Lưu</Button>
                            </div>
                        </div>
                    </main>
                </div>
            </form>
        </Form>
    )
}

export default memo(ProductForm);