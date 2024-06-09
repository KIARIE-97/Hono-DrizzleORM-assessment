"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersWithRelations = void 0;
// userRelation.service.ts
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db")); // Adjust the import based on your actual database initialization
const schema_1 = require("../drizzle/schema");
// Get all users with their related data
const getUsersWithRelations = async () => {
    const users = await db_1.default
        .select()
        .from(schema_1.usersTable)
        .leftJoin(schema_1.commentTable, (0, drizzle_orm_1.eq)(schema_1.commentTable.userId, schema_1.usersTable.id))
        .leftJoin(schema_1.addressTable, (0, drizzle_orm_1.eq)(schema_1.addressTable.userId, schema_1.usersTable.id))
        .leftJoin(schema_1.ordersTable, (0, drizzle_orm_1.eq)(schema_1.ordersTable.userId, schema_1.usersTable.id))
        .leftJoin(schema_1.driverTable, (0, drizzle_orm_1.eq)(schema_1.driverTable.userId, schema_1.usersTable.id))
        .leftJoin(schema_1.restaurant_ownerTable, (0, drizzle_orm_1.eq)(schema_1.restaurant_ownerTable.ownerId, schema_1.usersTable.id))
        .execute();
    const usersWithRelations = users.reduce((acc, user) => {
        const userId = user.usersTable?.id; // Safely access id
        if (!userId)
            return acc; // Skip if userId is undefined
        if (!acc[userId]) {
            acc[userId] = {
                ...user.usersTable,
                comments: [],
                addresses: [],
                orders: [],
                drivers: [],
                restaurantOwners: []
            };
        }
        if (user.commentTable) {
            acc[userId].comments.push(user.commentTable);
        }
        if (user.addressTable) {
            acc[userId].addresses.push(user.addressTable);
        }
        if (user.ordersTable) {
            acc[userId].orders.push(user.ordersTable);
        }
        if (user.driverTable) {
            acc[userId].drivers.push(user.driverTable);
        }
        if (user.restaurantOwnerTable) {
            acc[userId].restaurantOwners.push(user.restaurantOwnerTable);
        }
        return acc;
    }, {});
    return Object.values(usersWithRelations);
};
exports.getUsersWithRelations = getUsersWithRelations;
