import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listDrivers, getSingleDriver, createDriver, deleteDriver, updateDriver } from "./driver.controller";
import { get } from "http";
import { driverSchema } from "../validators";


export const driverRouter = new Hono();

driverRouter.get("/drivers", listDrivers)
driverRouter.get("/drivers/:id", getSingleDriver)
driverRouter.post("/drivers", zValidator('json', driverSchema, (results, c) => {
    if (!results.success){
        return c.json(results.error, 400)
    }
}) ,createDriver)
driverRouter.put("/drivers/:id", updateDriver)
driverRouter.delete("/drivers/:id", deleteDriver)
