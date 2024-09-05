import {z} from "zod";

export const ProductImageSchema = z.object({
    image: z.string(),
    alt: z.string().optional(),
    productId: z.string().optional(),
}).optional();


export const ProductAdvantageSchema = z.object({
    title: z.string().max(255),
    advantage: z.string(),
    productId: z.string().optional(),
}).optional();


export const ProductDocumentSchema = z.object({
    documentTitle: z.string(),
    documentLink: z.string(),
    productId: z.string().optional(),
}).optional();


export const FAQSchema = z.object({
    ask: z.string(),
    answer: z.string(),
    productId: z.string().optional(),
}).optional();

export const UseGuideDocumentSchema = z.object({
    useGuideDocumentTitle: z.string(),
    useGuideDocumentLink: z.string(),
    productId: z.string().optional(),
}).optional();


export const ProductSchema = z.object({
    title: z.string().min(1).max(255),
    categoryId: z.string(),
    description: z.string().min(1).optional(),
    thumbImage: z.string().optional(),
    manufacturer: z.string().min(1).optional(),
    images: z.array(ProductImageSchema).optional(),
    advantages: z.array(ProductAdvantageSchema).optional(),
    documents: z.array(ProductDocumentSchema).optional(),
    faq: z.array(FAQSchema).optional(),
    useGuideVideoTitle: z.string().optional(),
    useGuideVideoLink: z.string().optional(),
    useGuideDocument: z.array(UseGuideDocumentSchema).optional(),
});