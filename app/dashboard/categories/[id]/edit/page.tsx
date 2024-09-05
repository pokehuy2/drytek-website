import CategoryForm from "@/app/dashboard/categories/_components/CategoryForm";
import prisma from "@/prisma/client";
import {notFound} from "next/navigation";

const EditCategoryPage = async({params}: {params: {id: string}}) => {
    const category = await prisma.category.findUnique({where: {id: params.id}});
    if(!category) notFound();

    return (<CategoryForm category={category}/>)
}

export default EditCategoryPage;