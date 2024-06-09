"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryService = exports.updateCategoryService = exports.createCategoryService = exports.getCategoryService = exports.categoryService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const categoryService = async () => {
    return await db_1.default.query.categoryTable.findMany();
};
exports.categoryService = categoryService;
//get one restaurant
const getCategoryService = async (id) => {
    return await db_1.default.query.categoryTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.categoryTable.id, id)
    });
};
exports.getCategoryService = getCategoryService;
//create restaurant
const createCategoryService = async (category) => {
    await db_1.default.insert(schema_1.categoryTable).values(category);
    return category;
};
exports.createCategoryService = createCategoryService;
//update restaurant
const updateCategoryService = async (id, category) => {
    await db_1.default.update(schema_1.categoryTable).set(category).where((0, drizzle_orm_1.eq)(schema_1.categoryTable.id, id));
    return category;
};
exports.updateCategoryService = updateCategoryService;
//.delete restaurant
const deleteCategoryService = async (id) => {
    await db_1.default.delete(schema_1.categoryTable).where((0, drizzle_orm_1.eq)(schema_1.categoryTable.id, id));
    return "user deleted successfully!😑";
};
exports.deleteCategoryService = deleteCategoryService;
