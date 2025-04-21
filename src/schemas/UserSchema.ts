import { z } from 'zod'

export const BookSchema = z.object({
    id: z.string(),
    title: z.string(),
    price: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
})
export const UserSchema = z.object({
    id: z.string(),
    username: z.string(),
    email: z.string(),
    profile: z.object({
        name: z.string(),
        company: z.string(),
        address: z.object({ street: z.string(), city: z.string() }),
        about: z.string(),
    }),
    novels: z.array(BookSchema),
    comics: z.array(BookSchema),
    textbooks: z.array(BookSchema),
    finances: z.array(BookSchema),
    sales: z.object({
        novel: z.object({
            product_id: z.string(),
            num_sales: z.number(),
            num_value: z.number(),
            product_type: z.string(),
        }),
        comic: z.object({
            product_id: z.string(),
            num_sales: z.number(),
            num_value: z.number(),
            product_type: z.string(),
        }),
        textbook: z.object({
            product_id: z.string(),
            num_sales: z.number(),
            num_value: z.number(),
            product_type: z.string(),
        }),
        finance: z.object({
            product_id: z.string(),
            num_sales: z.number(),
            num_value: z.number(),
            product_type: z.string(),
        }),
    }),
    status: z.enum(['active', 'hiatus']),
    createdAt: z.string(),
    updatedAt: z.string(),
})

export type User = z.infer<typeof UserSchema>
