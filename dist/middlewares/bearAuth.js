"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoleAuth = exports.adminRoleAuth = exports.authMiddlewares = exports.verifyToken = void 0;
require("dotenv/config");
const jwt_1 = require("hono/jwt");
//authentication middleware
const verifyToken = async (token, secret) => {
    try {
        const decoded = await (0, jwt_1.verify)(token, secret);
        return decoded;
    }
    catch (error) {
        return null;
    }
};
exports.verifyToken = verifyToken;
const authMiddlewares = async (c, next, requiredRole) => {
    const token = c.req.header("Authorization");
    if (!token)
        return c.json({ error: "token not provided" }, 401);
    const decoded = await (0, exports.verifyToken)(token, process.env.JWT_SECRET);
    if (!decoded)
        return c.json({ error: "invalid token" }, 401);
    if (decoded.role !== requiredRole)
        return c.json({ error: "Unauthorized" }, 401);
    return next;
};
exports.authMiddlewares = authMiddlewares;
const adminRoleAuth = async (c, next) => await (0, exports.authMiddlewares)(c, next, "admin");
exports.adminRoleAuth = adminRoleAuth;
const userRoleAuth = async (c, next) => await (0, exports.authMiddlewares)(c, next, "user");
exports.userRoleAuth = userRoleAuth;
