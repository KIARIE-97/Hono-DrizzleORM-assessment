"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletestatusCatalogService = exports.updatestatusCatalogService = exports.createstatusCatalogService = exports.getstatusCatalogService = exports.statusCatalogService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const statusCatalogService = async () => {
    return await db_1.default.query.status_catalogTable.findMany();
};
exports.statusCatalogService = statusCatalogService;
//get one restaurant
const getstatusCatalogService = async (id) => {
    return await db_1.default.query.status_catalogTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.status_catalogTable.id, id)
    });
};
exports.getstatusCatalogService = getstatusCatalogService;
//create restaurant
const createstatusCatalogService = async (statusCatalog) => {
    await db_1.default.insert(schema_1.status_catalogTable).values(statusCatalog);
    return statusCatalog;
};
exports.createstatusCatalogService = createstatusCatalogService;
//update restaurant
const updatestatusCatalogService = async (id, statusCatalog) => {
    await db_1.default.update(schema_1.status_catalogTable).set(statusCatalog).where((0, drizzle_orm_1.eq)(schema_1.status_catalogTable.id, id));
    return statusCatalog;
};
exports.updatestatusCatalogService = updatestatusCatalogService;
//.delete restaurant
const deletestatusCatalogService = async (id) => {
    await db_1.default.delete(schema_1.status_catalogTable).where((0, drizzle_orm_1.eq)(schema_1.status_catalogTable.id, id));
    return "user deleted successfully!😑";
};
exports.deletestatusCatalogService = deletestatusCatalogService;
