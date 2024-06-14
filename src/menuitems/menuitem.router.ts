import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listMenu, getSinglemenuItem, createmenuItem, updatemenuItem, deletemenuItem } from "./menuitem.controller";
import { get } from "http";
// import { restaurantsSchema } from "../validators";

export const menuItemRouter = new Hono();

menuItemRouter.get("/menuItem", listMenu)
menuItemRouter.get("/menuItem/:id", getSinglemenuItem)
menuItemRouter.post("/menuItem", createmenuItem)
menuItemRouter.put("/menuItem/:id", updatemenuItem)
menuItemRouter.delete("/menuItem/:id", deletemenuItem)
