import prisma from "@/prisma/client";
import ProductForm from "@/app/dashboard/products/add/ProductForm";

const AddNewProductPage = async () => {
    const categories = await prisma.category.findMany();

    return (
        <ProductForm categories={categories}/>
    )
}

export default AddNewProductPage