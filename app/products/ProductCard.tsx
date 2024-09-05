'use client'
import {useRouter} from 'next/navigation';
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {
    id: number,
    imageLink: string;
    mainBadget?: string;
    productName: string;
    productDescription: string;
    tags: string[]
}
const ProductCard = ({id, imageLink, mainBadget, productName, productDescription, tags} : Props) => {
    const router = useRouter();
    return (
        <div>
            <Card className="rounded-lg max-w-[350px] max-h-fit p-2.5 max-[768px]:mx-auto max-[768px]:mb-6">
                <Image
                    src={imageLink}
                    width={330}
                    height={400}
                    alt={productName}
                    className="rounded-sm h-[300px] bg-cover"
                />
                <h5 className='text-sm'>Hút ẩm Container</h5>
                <div className='flex items-center justify-between'>
                    <h3 className='font-bold'>{productName}</h3>
                    {mainBadget && <Badge className='bg-green-500 text-xs'>{mainBadget}</Badge>}
                </div>
                <p className="text-sm py-3 text-muted-foreground">{productDescription}</p>
                <Separator />
                <div className='pt-2.5 flex justify-between items-end'>
                    <div>
                        <h5 className='text-xs'>Kích thước</h5>
                        <Select>
                            <SelectTrigger className="w-[120px] h-[26px] rounded-sm">
                                <SelectValue placeholder="Kích thước" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="1m">1m</SelectItem>
                                    <SelectItem value="2m">2m</SelectItem>
                                    <SelectItem value="3m">3m</SelectItem>
                                    <SelectItem value="4m">4m</SelectItem>
                                    <SelectItem value="5m">5m</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button className='font-xs font-light h-[26px] rounded-sm' onClick={() => router.push(`/products/${id}`)}>Chi tiết</Button>
                </div>
            </Card>
        </div>
    )
}

export default ProductCard;