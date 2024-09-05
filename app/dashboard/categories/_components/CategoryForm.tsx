'use client'
import {memo, useCallback} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {CategorySchema} from "@/app/dashboard/categories/add/validation";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "next/navigation"
import {Category} from "@prisma/client";

type TCategorySchema = z.infer<typeof CategorySchema>
const initialValues = {
    title: "",
}

const CategoryForm = ({category}: {category?: Category}) => {
    const router = useRouter();
    const form = useForm<TCategorySchema>({
        resolver: zodResolver(CategorySchema),
        defaultValues: category ?? initialValues,
    })

    const onSubmit = useCallback(async(values: TCategorySchema) => {
        try{
            category ?
                await fetch("/api/dashboard/categories/" + category.id, {method: "PATCH", body:JSON.stringify(values)}) :
                await fetch("/api/dashboard/categories", {method: "POST", body: JSON.stringify(values)})
            router.push("/dashboard/categories")
            router.refresh()
        } catch(error){
            console.log(error)
        }
    },[])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                            <div className="flex items-center gap-4">
                                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                                    Thêm mới nhóm hàng hoá
                                </h1>
                                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                                    <Link href="/dashboard/products"><Button variant="outline" size="sm">
                                        Huỷ
                                    </Button></Link>
                                    <Button size="sm" type="submit">Lưu</Button>
                                </div>
                            </div>
                            <div className="grid gap-4 md:grid-cols-[1fr] lg:grid-cols-2 lg:gap-8">
                                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                                    <Card x-chunk="dashboard-07-chunk-0">
                                        <CardHeader>
                                            <CardTitle>Thông tin hàng hoá</CardTitle>
                                            <CardDescription>
                                                Nhập tên của nhóm hàng hoá
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid gap-6">
                                                <div className="grid gap-3">
                                                    <FormField name="title" render={({field}) => (
                                                        <FormItem>
                                                            <FormLabel>Tên nhóm</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Gel hút ẩm" className="w-full" {...field}/>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>)}/>
                                                    <FormField name="description" render={({field}) => (
                                                        <FormItem>
                                                            <FormLabel>Miêu tả</FormLabel>
                                                            <FormControl>
                                                                <Textarea {...field}/>
                                                            </FormControl>
                                                        </FormItem>
                                                    )}/>
                                                </div>
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
export default memo(CategoryForm);