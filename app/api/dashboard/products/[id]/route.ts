import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import {ProductSchema} from "@/app/dashboard/products/add/validation";
import {ProductImage, ProductAdvantage, ProductDocument, UseGuideDocument, FAQ} from "@prisma/client";

export async function PATCH(request: NextRequest, {params}: {params: {id: string}}) {
    const body = await request.json();
    const validation = ProductSchema.safeParse(body);
    if(!validation.success) {
        return NextResponse.json(validation.error.format(), {status: 400})
    }
    const product = await prisma.product.findUnique({where: {id: params.id}});
    if(!product) {
        return NextResponse.json({error: 'Invalid product'}, {status: 400});
    }

    const updatedCategory = await prisma.product.update({
        where: {id: product.id},
        data: {
            title: body.title,
            description: body.description,
            categoryId: body.categoryId,
            thumbImage: body.thumbImage,
            manufacturer: body.manufacturer,
            useGuideVideoTitle: body.useGuideVideoTitle,
            useGuideVideoLink: body.useGuideVideoLink,
            images: {
                create: body.images?.filter((img : ProductImage) => img.image !== undefined || '').map((img : ProductImage) => ({
                    image: img.image,
                    alt: img.alt
                })) || []
            },
            advantages: {
                create: body.advantages?.filter((adv : ProductAdvantage) => adv.advantage).map((adv : ProductAdvantage ) => ({
                    title: adv.title,
                    advantage: adv.advantage
                })) || []
            },
            documents: {
                create: body.documents?.map((doc : ProductDocument ) => ({
                    documentTitle: doc.documentTitle,
                    documentLink: doc.documentLink
                })) || []
            },
            faq: {
                create: body.faq?.map((faq : FAQ) => ({
                    ask: faq.ask,
                    answer: faq.answer
                })) || []
            },
            useGuideDocument: {
                create: body.useGuideDocument?.map((doc: UseGuideDocument ) => ({
                    useGuideDocumentTitle: doc.useGuideDocumentTitle,
                    useGuideDocumentLink: doc.useGuideDocumentLink
                }))
            }
        }
    })

    return NextResponse.json(updatedCategory);
}

export async function DELETE(request: NextRequest, {params}: {params: {id: string}}) {
    const product = await prisma.product.findUnique({where: {id: params.id}});
    if(!product) {
        return NextResponse.json({ error: 'Invalid product' }, { status: 404 });
    }
    await prisma.productImage.deleteMany({where: {productId: params.id}})
    await prisma.productAdvantage.deleteMany({where: {productId: params.id}})
    await prisma.productDocument.deleteMany({where: {productId: params.id}})
    await prisma.fAQ.deleteMany({where: {productId: params.id}})
    await prisma.useGuideDocument.deleteMany({where: {productId: params.id}})
    await prisma.product.delete({where: {id: params.id}})

    return NextResponse.json({});
}