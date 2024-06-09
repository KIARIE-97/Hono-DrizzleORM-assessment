"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddressService = exports.updateAddressService = exports.createAddressService = exports.getAddressService = exports.addressService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
//get all address
const addressService = async () => {
    return await db_1.default.query.addressTable.findMany();
};
exports.addressService = addressService;
//get single address
const getAddressService = async (id) => {
    return await db_1.default.query.addressTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.addressTable.id, id)
    });
};
exports.getAddressService = getAddressService;
//create address
const createAddressService = async (address) => {
    await db_1.default.insert(schema_1.addressTable).values(address);
    return address;
};
exports.createAddressService = createAddressService;
//update address
const updateAddressService = async (id, address) => {
    await db_1.default.update(schema_1.addressTable).set(address).where((0, drizzle_orm_1.eq)(schema_1.addressTable.id, id));
    return address;
};
exports.updateAddressService = updateAddressService;
//delete address
const deleteAddressService = async (id) => {
    await db_1.default.delete(schema_1.addressTable).where((0, drizzle_orm_1.eq)(schema_1.addressTable.id, id));
    return "address deleted successfully!😑";
};
exports.deleteAddressService = deleteAddressService;
