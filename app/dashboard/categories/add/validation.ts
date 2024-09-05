import {z} from "zod";

export const CategorySchema = z.object({
    title: z.string().min(1, 'Tên nhóm tối thiểu 1 ký tự').max(255, 'Tên nhóm tối đa 255 ký tự'),
    description: z.string().min(1).optional(),
})