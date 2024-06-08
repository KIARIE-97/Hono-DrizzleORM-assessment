import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listMenu, getSinglemenuItem, createmenuItem, updatemenuItem, deletemenuItem } from "./menuitem.controller";
import { get } from "http";
// import { restaurantsSchema } from "../validators";

export const menuItemRouter = new Hono();

menuItemRouter.get("/restaurants", listMenu)
menuItemRouter.get("/restaurants/:id", getSinglemenuItem)
menuItemRouter.post("/restaurants", createmenuItem)
menuItemRouter.put("/restaurants/:id", updatemenuItem)
menuItemRouter.delete("/restaurants/:id", deletemenuItem)
