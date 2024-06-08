import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listRestaurant, getSingleRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } from "./city.controller";
import { get } from "http";
// import { restaurantownersRouterSchema } from "../validators";

export const restaurantownersRouter = new Hono();

restaurantownersRouter.get("/restaurantowners", listRestaurant)
restaurantownersRouter.get("/restaurantowners/:id", getSingleRestaurant)
restaurantownersRouter.post("/restaurantowners", createRestaurant)
restaurantownersRouter.put("/restaurantowners/:id", updateRestaurant)
restaurantownersRouter.delete("/restaurantowners/:id", deleteRestaurant)