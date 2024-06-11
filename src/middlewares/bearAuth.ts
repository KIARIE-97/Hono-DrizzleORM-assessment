import "dotenv/config"
import { verify } from "hono/jwt"
import { Context, Next } from "hono";


//authentication middleware
export const verifyToken = async (token: string, secret: string) => {
    try {
        const decoded = await verify(token as string, secret)
        return decoded;
    } catch (error: any) {
        return null
    }
}

export const authMiddlewares = async (c: Context, next: Next, requiredRole: string) => {

    try {
    const token = c.req.header("Authorization");
    if (!token) return c.json({ error: "token not provided"}, 401);
    const decoded = await verifyToken(token, process.env.JWT_SECRET as string);
    if (!decoded) return c.json({error: "invalid token"}, 401);
    if (decoded.role !== requiredRole) return c.json({ error: "Unauthorized" }, 401);

    return next();
} catch (error: any) {
    return c.json({ error: error?.message }, 400)
}
}

export const adminRoleAuth = async (c: Context, next: Next) => await authMiddlewares(c, next, "admin")
export const userRoleAuth = async (c: Context, next: Next) => await authMiddlewares(c, next, "user")