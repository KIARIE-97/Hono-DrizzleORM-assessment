import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listCities, getSingleCity, createCity, updateCity, deleteCity, listcityWithallService } from "./city.controller";
import { get } from "http";
import { citySchema } from "../validators";

export const cityRouter = new Hono();

cityRouter.get("/cities", listCities)
cityRouter.get("/citiesrelations", listcityWithallService)
cityRouter.get("/cities/:id", getSingleCity)
cityRouter.post("/cities", zValidator('json', citySchema, (results, c) => {
    if (!results.success){
        return c.json(results.error, 400)
    }
}) ,createCity)
cityRouter.put("/cities/:id", updateCity)
cityRouter.delete("/cities/:id", deleteCity)