import * as z from "zod"

export const EventFormSchema = z.object({
    title:z.string().min(3, "Title must be atleat 3 characters").max(100, "Title must be less than 30 characters"),
    description:z.string().min(15, "Description must be atleat 15 characters").max(400, "Description must be less than 400 characters"),
    location:z.string().min(3, "Location must be atleat 3 characters").max(400, "Location must be less than 30 characters"),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()
  })