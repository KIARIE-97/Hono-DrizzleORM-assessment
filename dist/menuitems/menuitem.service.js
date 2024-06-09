"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenuService = exports.updateMenuService = exports.createMenuService = exports.getMenuService = exports.menuService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const menuService = async () => {
    return await db_1.default.query.menu_itemTable.findMany();
};
exports.menuService = menuService;
//get one restaurant
const getMenuService = async (id) => {
    return await db_1.default.query.menu_itemTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.menu_itemTable.id, id)
    });
};
exports.getMenuService = getMenuService;
//create restaurant
const createMenuService = async (menu) => {
    await db_1.default.insert(schema_1.menu_itemTable).values(menu);
    return menu;
};
exports.createMenuService = createMenuService;
//update restaurant
const updateMenuService = async (id, menu) => {
    await db_1.default.update(schema_1.menu_itemTable).set(menu).where((0, drizzle_orm_1.eq)(schema_1.menu_itemTable.id, id));
    return menu;
};
exports.updateMenuService = updateMenuService;
//.delete restaurant
const deleteMenuService = async (id) => {
    await db_1.default.delete(schema_1.menu_itemTable).where((0, drizzle_orm_1.eq)(schema_1.menu_itemTable.id, id));
    return "menu deleted successfully!😑";
};
exports.deleteMenuService = deleteMenuService;
