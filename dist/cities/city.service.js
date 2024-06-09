"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCityService = exports.updateCityService = exports.createCityService = exports.getCityService = exports.cityService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const cityService = async () => {
    return await db_1.default.query.cityTable.findMany();
};
exports.cityService = cityService;
//get one city
const getCityService = async (id) => {
    return await db_1.default.query.cityTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.cityTable.id, id)
    });
};
exports.getCityService = getCityService;
//create city
const createCityService = async (city) => {
    await db_1.default.insert(schema_1.cityTable).values(city);
    return city;
};
exports.createCityService = createCityService;
//update city
const updateCityService = async (id, city) => {
    await db_1.default.update(schema_1.cityTable).set(city).where((0, drizzle_orm_1.eq)(schema_1.cityTable.id, id));
    return city;
};
exports.updateCityService = updateCityService;
//delete city
const deleteCityService = async (id) => {
    await db_1.default.delete(schema_1.cityTable).where((0, drizzle_orm_1.eq)(schema_1.cityTable.id, id));
    return "user deleted successfully!😑";
};
exports.deleteCityService = deleteCityService;
