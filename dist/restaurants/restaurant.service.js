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
    return await db_1.default.query.restaurantTable.findMany();
};
exports.restaurantService = restaurantService;
//get one restaurant
const getRestaurantService = async (id) => {
    return await db_1.default.query.restaurantTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.restaurantTable.id, id)
    });
};
exports.getRestaurantService = getRestaurantService;
//create restaurant
const createRestaurantService = async (restaurant) => {
    await db_1.default.insert(schema_1.restaurantTable).values(restaurant);
    return restaurant;
};
exports.createRestaurantService = createRestaurantService;
//update restaurant
const updateRestaurantService = async (id, restaurant) => {
    await db_1.default.update(schema_1.restaurantTable).set(restaurant).where((0, drizzle_orm_1.eq)(schema_1.restaurantTable.id, id));
    return restaurant;
};
exports.updateRestaurantService = updateRestaurantService;
//.delete restaurant
const deleteRestaurantService = async (id) => {
    await db_1.default.delete(schema_1.restaurantTable).where((0, drizzle_orm_1.eq)(schema_1.restaurantTable.id, id));
    return "user deleted successfully!😑";
};
exports.deleteRestaurantService = deleteRestaurantService;
