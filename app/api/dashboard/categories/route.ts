import {NextRequest, NextResponse} from "next/server";
import {CategorySchema} from "@/app/dashboard/categories/add/validation";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = CategorySchema.safeParse(body);
    if(!validation.success) return NextResponse.json(validation.error.errors, {status: 400})

    const newCategory = await prisma.category.create({
        data: {
            title: body.title,
            description: body.description,
        }
    })
    return NextResponse.json(newCategory, {status: 201})
}