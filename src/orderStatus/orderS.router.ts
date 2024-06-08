import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listorderStatus, getSingleorderStatus, createorderStatus, updateorderStatus, deleteRestaurant } from "./orderS.controller";
import { get } from "http";
// import { restaurantsSchema } from "../validators";

export const orderStatusRouter = new Hono();

orderStatusRouter.get("/orderStatus", listorderStatus)
orderStatusRouter.get("/orderStatus/:id", getSingleorderStatus)
orderStatusRouter.post("/orderStatus", createorderStatus)
orderStatusRouter.put("/orderStatus/:id", updateorderStatus)
orderStatusRouter.delete("/orderStatus/:id", deleteRestaurant)
