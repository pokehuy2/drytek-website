import ProductForm from "@/app/dashboard/products/add/ProductForm";
import {notFound} from "next/navigation";
import prisma from "@/prisma/client";


const EditProductPage = async({params}: {params: {id: string}}) => {
    const product = await prisma.product.findUnique({where: {id: params.id}, include: {faq: true, images: true, documents: true, useGuideDocument: true, advantages: true}});
    const categories = await prisma.category.findMany();
    const images = await prisma.productImage.findMany({where: {productId: params.id}});
    if(!product) notFound()

    return (<ProductForm categories={categories} product={product} productImages={images} />)
}

export default EditProductPage;