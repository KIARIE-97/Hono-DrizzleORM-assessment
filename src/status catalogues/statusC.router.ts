import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { liststatusCatalog, getSinglestatusCatalog, createstatusCatalog, updatestatusCatalog, deletestatusCatalog } from "./statusC.controller";
import { get } from "http";
// import { restaurantsSchema } from "../validators";
import {adminRoleAuth} from "../middlewares/bearAuth"

export const statusCatalogRouter = new Hono();

statusCatalogRouter.get("/statusCatalog",adminRoleAuth, liststatusCatalog)
statusCatalogRouter.get("/statusCatalog/:id",adminRoleAuth, getSinglestatusCatalog)
statusCatalogRouter.post("/statusCatalog",adminRoleAuth, createstatusCatalog)
statusCatalogRouter.put("/statusCatalog/:id",adminRoleAuth, updatestatusCatalog)
statusCatalogRouter.delete("/statusCatalog/:id",adminRoleAuth, deletestatusCatalog)
