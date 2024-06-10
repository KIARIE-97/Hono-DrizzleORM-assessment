import { zValidator } from '@hono/zod-validator'
import {Hono} from 'hono'
import {registerUserSchema, loginUserSchema} from '../validators'
import {registerUser, loginUser } from './auth.controller'

export const authRouter = new Hono();

authRouter.post('/register', zValidator('json', registerUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), registerUser)

authRouter.post('/login', zValidator('json', loginUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), loginUser)