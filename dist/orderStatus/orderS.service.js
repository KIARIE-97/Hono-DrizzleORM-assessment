"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderStatusService = exports.updateOrderStatusService = exports.createStatusOrderService = exports.getOrderStatusService = exports.orderStatusService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const orderStatusService = async () => {
    return await db_1.default.query.order_statusTable.findMany();
};
exports.orderStatusService = orderStatusService;
//get one restaurant
const getOrderStatusService = async (id) => {
    return await db_1.default.query.order_statusTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.order_statusTable.id, id)
    });
};
exports.getOrderStatusService = getOrderStatusService;
//create restaurant
const createStatusOrderService = async (orderStatus) => {
    await db_1.default.insert(schema_1.order_statusTable).values(orderStatus);
    return orderStatus;
};
exports.createStatusOrderService = createStatusOrderService;
//update restaurant
const updateOrderStatusService = async (id, orderStatus) => {
    await db_1.default.update(schema_1.order_statusTable).set(orderStatus).where((0, drizzle_orm_1.eq)(schema_1.order_statusTable.id, id));
    return orderStatus;
};
exports.updateOrderStatusService = updateOrderStatusService;
//.delete restaurant
const deleteOrderStatusService = async (id) => {
    await db_1.default.delete(schema_1.order_statusTable).where((0, drizzle_orm_1.eq)(schema_1.order_statusTable.id, id));
    return "user deleted successfully!😑";
};
exports.deleteOrderStatusService = deleteOrderStatusService;
