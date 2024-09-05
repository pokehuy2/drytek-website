import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import {CategorySchema} from "@/app/dashboard/categories/add/validation";

export async function PATCH(request: NextRequest, {params}: {params: {id: string}}) {
    const body = await request.json();
    const validation = CategorySchema.safeParse(body);
    if(!validation.success) {
        return NextResponse.json(validation.error.format(), {status: 400})
    }
    const category = await prisma.category.findUnique({where: {id: params.id}});
    if(!category) {
        return NextResponse.json({error: 'Invalid category'}, {status: 400});
    }

    const updatedCategory = await prisma.category.update({
        where: {id: category.id},
        data: {
            title: body.title,
            description: body.description,
        }
    })

    return NextResponse.json(updatedCategory);
}

export async function DELETE(request: NextRequest, {params} : {params: {id: string}}) {
    const category = await prisma.category.findUnique({where: {id: params.id}});
    if(!category) {
        return NextResponse.json({ error: 'Invalid category' }, { status: 404 });
    }

    await prisma.category.delete({where: {id: category.id}});

    return NextResponse.json({});
}