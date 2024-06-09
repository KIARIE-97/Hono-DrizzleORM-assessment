"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.citySchema = exports.driverSchema = exports.stateSchema = exports.userSchema = void 0;
const zod_1 = require("zod");
// import{ zValidator } from "@hono/node-server"
exports.userSchema = zod_1.z.object({
    name: zod_1.z.string(),
    contact_phone: zod_1.z.number(),
    phone_verified: zod_1.z.boolean(),
    email: zod_1.z.string().email(),
    email_verified: zod_1.z.boolean(),
    confirmation_code: zod_1.z.null(),
    password: zod_1.z.number()
});
exports.stateSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    code: zod_1.z.number(),
});
exports.driverSchema = zod_1.z.object({
    car_make: zod_1.z.string(),
    car_model: zod_1.z.string(),
    car_year: zod_1.z.number(),
    userId: zod_1.z.number(),
    online: zod_1.z.boolean(),
    delivering: zod_1.z.boolean(),
});
exports.citySchema = zod_1.z.object({
    // "id": 4,
    name: zod_1.z.string(),
    stateId: zod_1.z.number()
});
