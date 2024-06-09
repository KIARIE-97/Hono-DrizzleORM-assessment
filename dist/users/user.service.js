"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.updateUserService = exports.createUserService = exports.getUserService = exports.userService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const userService = async () => {
    return await db_1.default.query.usersTable.findMany();
};
exports.userService = userService;
//get one user
const getUserService = async (id) => {
    return await db_1.default.query.usersTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.usersTable.id, id)
    });
};
exports.getUserService = getUserService;
//create user
const createUserService = async (user) => {
    await db_1.default.insert(schema_1.usersTable).values(user);
    return user;
};
exports.createUserService = createUserService;
//update user
const updateUserService = async (id, user) => {
    await db_1.default.update(schema_1.usersTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.usersTable.id, id));
    return user;
};
exports.updateUserService = updateUserService;
//delete user
const deleteUserService = async (id) => {
    await db_1.default.delete(schema_1.usersTable).where((0, drizzle_orm_1.eq)(schema_1.usersTable.id, id));
    return "user deleted successfully!😑";
};
exports.deleteUserService = deleteUserService;
