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

export const driverSchema = z.object({
  
  car_make: z.string(),
  car_model:z.string(),
  car_year: z.number(),
  userId: z.number(),
  online: z.boolean(),
  delivering: z.boolean(),
 
})

export const citySchema = z.object({
  // "id": 4,
  name: z.string(),
  stateId: z.number()
})

export const loginUserSchema = z.object({
  username: z.string(),
  password: z.string()
})
export const registerUserSchema = z.object({
  userId: z.number(),
  username: z.string(),
  name: z.string(),
  contact_phone: z.string(),
  phone_verified: z.boolean(),
  email: z.string().email(),
  email_verified: z.boolean(),
  confirmation_code: z.string(),
  password: z.string(),
  role: z.string().optional()
});

// name: user.name,
//         contact_phone: user.contact_phone,
//         phone_verified: false,
//         email: user.email,
//         email_verified: false,
//         confirmation_code: user.confirmation_code,
//         password: user.password