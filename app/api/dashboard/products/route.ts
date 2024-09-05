import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import {
    FAQSchema,
    ProductAdvantageSchema,
    ProductDocumentSchema,
    ProductImageSchema,
    ProductSchema
} from "@/app/dashboard/products/add/validation";
import { z } from 'zod'

type TProductImage = z.infer<typeof ProductImageSchema>

type TProductAdvantage = z.infer<typeof ProductAdvantageSchema>

type TProductDocument = z.infer<typeof ProductDocumentSchema>

type TProductFaq = z.infer<typeof FAQSchema>

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = ProductSchema.safeParse(body)
    if(!validation.success) return NextResponse.json(validation.error.errors, {status: 400})

    const newProduct = await prisma.product.create({
        data: {
            title: body.title,
            description: body.description,
            categoryId: body.categoryId,
            thumbImage: body.thumbImage,
            manufacturer: body.manufacturer,
            useGuideVideoTitle: body.useGuideVideoTitle,
            useGuideVideoLink: body.useGuideVideoLink,
            images: {
                create: body.images?.filter((img : TProductImage) => img.image !== undefined || '').map((img : TProductImage) => ({
                    image: img.image,
                    alt: img.alt
                })) || []
            },
            advantages: {
                create: body.advantages?.filter((adv : TProductAdvantage) => adv.advantage).map((adv : TProductAdvantage ) => ({
                    title: adv.title,
                    advantage: adv.advantage
                })) || []
            },
            documents: {
                create: body.documents?.map((doc : TProductDocument ) => ({
                    documentTitle: doc.documentTitle,
                    documentLink: doc.documentLink
                })) || []
            },
            faq: {
                create: body.faq?.map((faq : TProductFaq) => ({
                    ask: faq.ask,
                    answer: faq.answer
                })) || []
            },
            useGuideDocument: {
                create: body.useGuideDocument?.map((doc: TProductDocument ) => ({
                    documentTitle: doc.documentTitle,
                    documentLink: doc.documentLink
                }))
            }
        }
    })

    return NextResponse.json(newProduct, {status: 201})
}