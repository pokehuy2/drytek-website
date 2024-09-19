import DetailCarousel from "@/app/products/[id]/DetailCarousel";
import DetailCard from "@/app/products/[id]/DetailCard";
import ReceptCard from "@/app/products/[id]/ReceptCard";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import WhyMeCard from "@/app/products/[id]/WhyMeCard";
import {products} from "@/app/data/products";
import {TProduct} from "@/components/navigationbar/types";

interface Props {
    params: {id: string}
}

const ProductDetailPage = ({params: {id}} : Props) => {
    const item = products.find(product => product.id === id) as TProduct;
    return (
        <>
            <div className='flex p-5'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Trang chủ</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/products">Sản phẩm</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            {item?.title}
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 max-[768px]:p-6">
                <div>
                    <DetailCarousel product={item} />
                </div>
                <div><DetailCard product={item}/></div>
                {/*<div><ReceptCard/><WhyMeCard/></div>*/}
            </div>
        </>
    )
}

export default ProductDetailPage;