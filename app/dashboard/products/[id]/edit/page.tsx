import ProductForm from "@/app/dashboard/products/add/ProductForm";
import {notFound} from "next/navigation";
import prisma from "@/prisma/client";


const EditProductPage = async({params}: {params: {id: string}}) => {
    const product = await prisma.product.findUnique({where: {id: params.id}});
    const categories = await prisma.category.findMany();
    if(!product) notFound()

    return (<ProductForm categories={categories} product={product} />)
}

export default EditProductPage;