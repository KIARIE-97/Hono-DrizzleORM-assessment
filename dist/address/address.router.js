"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRouter = void 0;
const hono_1 = require("hono");
const address_controller_1 = require("./address.controller");
// import { addressSchema } from "../validators";
exports.addressRouter = new hono_1.Hono();
exports.addressRouter.get("/address", address_controller_1.listaddress);
exports.addressRouter.get("/address/:id", address_controller_1.getSingleAddress);
// addressRouter.post("/address", zValidator('json', addressSchema, (results, c) => {
//     if (!results.success){
//         return c.json(results.error, 400)
//     }
// }) ,createAddress)
exports.addressRouter.put("/address/:id", address_controller_1.updateAddress);
exports.addressRouter.delete("/address/:id", address_controller_1.deleteAddress);
