"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStateService = exports.updateStateService = exports.createStateService = exports.getStateService = exports.stateService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
//get all states
const stateService = async () => {
    return await db_1.default.query.stateTable.findMany();
};
exports.stateService = stateService;
//get one state
const getStateService = async (id) => {
    return await db_1.default.query.stateTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.stateTable.id, id)
    });
};
exports.getStateService = getStateService;
//create state
const createStateService = async (user) => {
    await db_1.default.insert(schema_1.stateTable).values(user);
    return user;
};
exports.createStateService = createStateService;
//update state
const updateStateService = async (id, user) => {
    await db_1.default.update(schema_1.stateTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.stateTable.id, id));
    return user;
};
exports.updateStateService = updateStateService;
//delete state
const deleteStateService = async (id) => {
    await db_1.default.delete(schema_1.stateTable).where((0, drizzle_orm_1.eq)(schema_1.stateTable.id, id));
    return "user deleted successfully!😑";
};
exports.deleteStateService = deleteStateService;
