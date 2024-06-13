import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listRestaurant, getSingleRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } from "./resowner.controller";
import { get } from "http";
// import { restaurantownersRouterSchema } from "../validators";
import {adminRoleAuth, userRoleAuth, adminUserRoleAuth} from "../middlewares/bearAuth"


export const restaurantownersRouter = new Hono();

restaurantownersRouter.get("/restaurantowners",adminRoleAuth, listRestaurant)
restaurantownersRouter.get("/restaurantowners/:id",adminUserRoleAuth, getSingleRestaurant)
restaurantownersRouter.post("/restaurantowners",adminUserRoleAuth, createRestaurant)
restaurantownersRouter.put("/restaurantowners/:id",adminUserRoleAuth, updateRestaurant)
restaurantownersRouter.delete("/restaurantowners/:id",adminRoleAuth, deleteRestaurant)