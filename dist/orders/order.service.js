"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrdersService = exports.updateOrdersService = exports.createOrdersService = exports.getOrdersService = exports.ordersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const ordersService = async () => {
    return await db_1.default.query.ordersTable.findMany();
};
exports.ordersService = ordersService;
//get one restaurant
const getOrdersService = async (id) => {
    return await db_1.default.query.ordersTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.ordersTable.id, id)
    });
};
exports.getOrdersService = getOrdersService;
//create restaurant
const createOrdersService = async (orders) => {
    await db_1.default.insert(schema_1.ordersTable).values(orders);
    return orders;
};
exports.createOrdersService = createOrdersService;
//update restaurant
const updateOrdersService = async (id, orders) => {
    await db_1.default.update(schema_1.ordersTable).set(orders).where((0, drizzle_orm_1.eq)(schema_1.ordersTable.id, id));
    return orders;
};
exports.updateOrdersService = updateOrdersService;
//.delete restaurant
const deleteOrdersService = async (id) => {
    await db_1.default.delete(schema_1.ordersTable).where((0, drizzle_orm_1.eq)(schema_1.ordersTable.id, id));
    return "orders deleted successfully!😑";
};
exports.deleteOrdersService = deleteOrdersService;
