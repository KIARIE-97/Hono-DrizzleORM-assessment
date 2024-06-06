import {z} from 'zod'
// import{ zValidator } from "@hono/node-server"

export const userSchema = z.object({
    name: z.string(),
    contact_phone: z.number(),
    phone_verified: z.boolean(),
    email: z.string().email(),
    email_verified: z.boolean(),
    confirmation_code: z.null(),
    password: z.number()
})

export const stateSchema = z.object({
  id: z.number(),
  name: z.string(),
  code: z.number(),
})