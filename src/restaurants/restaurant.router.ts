import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listRestaurant, getSingleRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } from "./restaurant.controller";
import { get } from "http";
// import { restaurantsSchema } from "../validators";

export const restaurantsRouter = new Hono();

restaurantsRouter.get("/restaurants", listRestaurant)
restaurantsRouter.get("/restaurants/:id", getSingleRestaurant)
restaurantsRouter.post("/restaurants", createRestaurant)
restaurantsRouter.put("/restaurants/:id", updateRestaurant)
restaurantsRouter.delete("/restaurants/:id", deleteRestaurant)
