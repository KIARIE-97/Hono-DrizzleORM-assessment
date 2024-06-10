import "dotenv/config"
import { verify } from "hono/jwt"

import { Context, Next } from "hono";
import { error } from "console";

//authentication middleware
export const verifyToken = async (token: string, secret: string) => {
    try {
        const decoded = await verify(token as string, secret)
        return decoded;
    } catch (error: any) {
        return null
    }
}

export const authMiddlewares = async (c: Context, next:Next, requiredRole: string) => {

    const token = c.req.header("Authorization");
    if (!token) return c.json({ error: "token not provided"}, 401);
    const decoded = await verifyToken(token, process.env.JWT_SECRET as string);
    if (!decoded) return c.json({error: "invalid token"}, 401);
    if (decoded.role !== requiredRole) return c.json({ error: "Unauthorized" }, 401);

    return next;
}

export const adminRoleAuth = async (c:Context, next: Next) => await authMiddlewares(c, next, "admin")
export const userRoleAuth = async (c:Context, next: Next) => await authMiddlewares(c, next, "user")