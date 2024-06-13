import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listRestaurant, getSingleRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } from "./restaurant.controller";
import { get } from "http";
// import { restaurantsSchema } from "../validators";
import {adminRoleAuth, userRoleAuth, adminUserRoleAuth} from "../middlewares/bearAuth"

export const restaurantsRouter = new Hono();

restaurantsRouter.get("/restaurants",adminRoleAuth, listRestaurant)
restaurantsRouter.get("/restaurants/:id", adminUserRoleAuth, getSingleRestaurant)
restaurantsRouter.post("/restaurants",adminUserRoleAuth, createRestaurant)
restaurantsRouter.put("/restaurants/:id",adminUserRoleAuth, updateRestaurant)
restaurantsRouter.delete("/restaurants/:id",adminRoleAuth, deleteRestaurant)
