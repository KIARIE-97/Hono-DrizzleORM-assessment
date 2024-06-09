"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteorderMenuItemService = exports.updateorderMenuItemService = exports.createorderMenuItemService = exports.getorderMenuItemService = exports.orderMenuItemService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const orderMenuItemService = async () => {
    return await db_1.default.query.order_menu_itemTable.findMany();
};
exports.orderMenuItemService = orderMenuItemService;
//get one restaurant
const getorderMenuItemService = async (id) => {
    return await db_1.default.query.order_menu_itemTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.order_menu_itemTable.id, id)
    });
};
exports.getorderMenuItemService = getorderMenuItemService;
//create restaurant
const createorderMenuItemService = async (restaurant) => {
    await db_1.default.insert(schema_1.order_menu_itemTable).values(restaurant);
    return restaurant;
};
exports.createorderMenuItemService = createorderMenuItemService;
//update restaurant
const updateorderMenuItemService = async (id, restaurant) => {
    await db_1.default.update(schema_1.order_menu_itemTable).set(restaurant).where((0, drizzle_orm_1.eq)(schema_1.order_menu_itemTable.id, id));
    return restaurant;
};
exports.updateorderMenuItemService = updateorderMenuItemService;
//.delete restaurant
const deleteorderMenuItemService = async (id) => {
    await db_1.default.delete(schema_1.order_menu_itemTable).where((0, drizzle_orm_1.eq)(schema_1.order_menu_itemTable.id, id));
    return "user deleted successfully!😑";
};
exports.deleteorderMenuItemService = deleteorderMenuItemService;
