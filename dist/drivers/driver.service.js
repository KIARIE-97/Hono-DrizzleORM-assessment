"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDriverService = exports.updateDriverService = exports.createDriverService = exports.getDriverService = exports.driverService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
//select all driver
const driverService = async () => {
    return await db_1.default.query.driverTable.findMany();
};
exports.driverService = driverService;
//select one driver
const getDriverService = async (id) => {
    return await db_1.default.query.driverTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.driverTable.id, id)
    });
};
exports.getDriverService = getDriverService;
//create driver
const createDriverService = async (driver) => {
    await db_1.default.insert(schema_1.driverTable).values(driver);
    return driver;
};
exports.createDriverService = createDriverService;
//update user
const updateDriverService = async (id, driver) => {
    await db_1.default.update(schema_1.driverTable).set(driver).where((0, drizzle_orm_1.eq)(schema_1.driverTable.id, id));
    return driver;
};
exports.updateDriverService = updateDriverService;
//delete user
const deleteDriverService = async (id) => {
    await db_1.default.delete(schema_1.driverTable).where((0, drizzle_orm_1.eq)(schema_1.driverTable.id, id));
    return "user deleted successfully!😑";
};
exports.deleteDriverService = deleteDriverService;
