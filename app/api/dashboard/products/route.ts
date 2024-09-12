import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import {
    ProductSchema
} from "@/app/dashboard/products/add/validation";

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = ProductSchema.safeParse(body)
    if(!validation.success) return NextResponse.json(validation.error.errors, {status: 400})

    const newProduct = await prisma.product.create({
        data: {
            title: body.title,
            categoryId: body.categoryId,
            description: body.description,
            thumbImage: body.thumbImage,
            manufacturer: body.manufacturer,
            image1: body.image1,
            alt1: body.alt1,
            image2: body.image2,
            alt2: body.alt2,
            image3: body.image3,
            alt3: body.alt3,
            image4: body.image4,
            alt4: body.alt4,
            image5: body.image5,
            alt5: body.alt5,
            image6: body.image6,
            alt6: body.alt6,
            image7: body.image7,
            alt7: body.alt7,
            image8: body.image8,
            alt8: body.alt8,
            image9: body.image9,
            alt9: body.alt9,
            advantage1: body.advantage1,
            advantage2: body.advantage2,
            advantage3: body.advantage3,
            advantage4: body.advantage4,
            advantage5: body.advantage5,
            advantage6: body.advantage6,
            documentTitle1: body.documentTitle1,
            documentLink1: body.documentLink1,
            documentTitle2: body.documentTitle2,
            documentLink2: body.documentLink2,
            documentTitle3: body.documentTitle3,
            documentLink3: body.documentLink3,
            useGuideVideoTitle: body.useGuideVideoTitle,
            useGuideVideoLink: body.userGuideVideoLink,
            useGuideDocumentTitle: body.userGuideDocumentTitle,
            useGuideDocumentLink: body.userGuideDocumentLink,
            ask1: body.ask1,
            answer1: body.answer1,
            ask2: body.ask2,
            answer2: body.answer2,
            ask3: body.ask3,
            answer3: body.answer3,
            ask4: body.ask4,
            answer4: body.answer4,
            ask5: body.ask5,
            answer5: body.answer5,
            ask6: body.ask6,
            answer6: body.answer6,
            ask7: body.ask7,
            answer7: body.answer7,
            ask8: body.ask8,
            answer8: body.answer8,
            ask9: body.ask9,
            answer9: body.answer9,
        }
    })

    return NextResponse.json(newProduct, {status: 201})
}