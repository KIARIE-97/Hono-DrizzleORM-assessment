"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurantService = exports.updateRestaurantService = exports.createRestaurantService = exports.getRestaurantService = exports.restaurantService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const restaurantService = async () => {
    return await db_1.default.query.restaurant_ownerTable.findMany();
};
exports.restaurantService = restaurantService;
//get one city
const getRestaurantService = async (id) => {
    return await db_1.default.query.restaurant_ownerTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.restaurant_ownerTable.id, id)
    });
};
exports.getRestaurantService = getRestaurantService;
//create city
const createRestaurantService = async (restaurant) => {
    await db_1.default.insert(schema_1.restaurant_ownerTable).values(restaurant);
    return restaurant;
};
exports.createRestaurantService = createRestaurantService;
//update city
const updateRestaurantService = async (id, restaurant) => {
    await db_1.default.update(schema_1.restaurant_ownerTable).set(restaurant).where((0, drizzle_orm_1.eq)(schema_1.restaurant_ownerTable.id, id));
    return restaurant;
};
exports.updateRestaurantService = updateRestaurantService;
//delete city
const deleteRestaurantService = async (id) => {
    await db_1.default.delete(schema_1.restaurant_ownerTable).where((0, drizzle_orm_1.eq)(schema_1.restaurant_ownerTable.id, id));
    return "user deleted successfully!😑";
};
exports.deleteRestaurantService = deleteRestaurantService;
