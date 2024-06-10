"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginService = exports.createAuthUserService = void 0;
const schema_1 = require("../drizzle/schema");
const db_1 = __importDefault(require("../drizzle/db"));
const drizzle_orm_1 = require("drizzle-orm");
const createAuthUserService = async (user) => {
    await db_1.default.insert(schema_1.AuthOnUsersTable).values(user);
    return "user created successfully";
};
exports.createAuthUserService = createAuthUserService;
const userLoginService = async (user) => {
    const { username, password } = user;
    return await db_1.default.query.AuthOnUsersTable.findFirst({
        columns: {
            username: true,
            role: true,
            password: true
        }, where: (0, drizzle_orm_1.sql) `${schema_1.AuthOnUsersTable.username} = ${username}`,
        with: {
            user: {
                columns: {
                    name: true,
                    contact_phone: true,
                    email: true,
                }
            }
        }
    });
};
exports.userLoginService = userLoginService;
