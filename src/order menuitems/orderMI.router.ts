import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listorderMenuItem, getSingleorderMenuItem, createorderMenuItem, updateorderMenuItem, deleteorderMenuItem } from "./orderMI.controller";
import { get } from "http";
// import { restaurantsSchema } from "../validators";

export const orderMenuItemRouter = new Hono();

orderMenuItemRouter.get("/orderMenuItem", listorderMenuItem)
orderMenuItemRouter.get("/orderMenuItem/:id", getSingleorderMenuItem)
orderMenuItemRouter.post("/orderMenuItem", createorderMenuItem)
orderMenuItemRouter.put("/orderMenuItem/:id", updateorderMenuItem)
orderMenuItemRouter.delete("/orderMenuItem/:id", deleteorderMenuItem)
