import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listaddress, getSingleAddress, createAddress, updateAddress, deleteAddress } from "./address.controller";
import { get } from "http";
// import { addressSchema } from "../validators";

export const addressRouter = new Hono();

addressRouter.get("/address", listaddress)
addressRouter.get("/address/:id", getSingleAddress)
// addressRouter.post("/address", zValidator('json', addressSchema, (results, c) => {
//     if (!results.success){
//         return c.json(results.error, 400)
//     }
// }) ,createAddress)
addressRouter.put("/address/:id", updateAddress)
addressRouter.delete("/address/:id", deleteAddress)

   