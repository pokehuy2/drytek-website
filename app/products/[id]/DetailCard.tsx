import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {ArrowUpRight} from 'lucide-react'
import {TProduct} from "@/components/navigationbar/types";
import {categories} from "@/app/data/categories";

const DetailCard = ({product}: {product: TProduct}) => {
    const category = categories.find(category => category.id === product?.categoryId);
    return (
        <Card>
            <CardHeader className="p-4">
                <CardTitle className="text-md">{product?.title}</CardTitle>
                <h3 className="text-sm">{category?.title}</h3>
            </CardHeader>
            <Separator/>
            <div className="p-4">
                <CardDescription>{product?.description}</CardDescription>
                <ul className="p-5 list-disc text-black text-sm text-gray-500">
                    {product?.details.map((detail, index) => <li key={index}>{detail}</li>)}
                </ul>
                {product.advantages.length > 1 && <><h3 className="text-sm font-bold text-black p-3">Ưu điểm của sản phẩm</h3>
                <ul className="px-5 list-disc text-black">
                    {product?.advantages.map((adv, index) => <li key={index}>{adv}</li>)}
                </ul></>}
            </div>
            <Separator/>
            <CardFooter className="flex-col items-start">
                <h3 className="text-sm font-bold text-black py-3">Kích thước</h3>
                <div>{product?.dimension}</div>
                {/*<h3 className="text-sm font-bold text-black py-3">Tài liệu sản phẩm</h3>*/}
                {/*<div className="italic">Chưa có tài liệu</div>*/}
                {/*<div className="flex items-center">*/}
                {/*    <p className="underline hover:cursor-pointer text-sm">Bảng thông số kỹ thuật</p><ArrowUpRight size={16} className="ml-1"/>*/}
                {/*</div>*/}
                {/*<div className="flex items-center">*/}
                {/*    <p className="underline hover:cursor-pointer text-sm">Bảng chỉ số an toàn</p><ArrowUpRight size={16} className="ml-1"/>*/}
                {/*</div>*/}
            </CardFooter>
        </Card>
    )
}

export default DetailCard