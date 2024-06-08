import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listOrders, getSingleOrders, createOrders, updateOrders, deleteOrders } from "./order.controller";
import { get } from "http";
// import { restaurantsSchema } from "../validators";

export const ordersRouter = new Hono();

ordersRouter.get("/orders", listOrders)
ordersRouter.get("/orders/:id", getSingleOrders)
ordersRouter.post("/orders", createOrders)
ordersRouter.put("/orders/:id", updateOrders)
ordersRouter.delete("/orders/:id", deleteOrders)
