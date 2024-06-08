import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { liststatusCatalog, getSinglestatusCatalog, createstatusCatalog, updatestatusCatalog, deletestatusCatalog } from "./statusC.controller";
import { get } from "http";
// import { restaurantsSchema } from "../validators";

export const statusCatalogRouter = new Hono();

statusCatalogRouter.get("/statusCatalog", liststatusCatalog)
statusCatalogRouter.get("/statusCatalog/:id", getSinglestatusCatalog)
statusCatalogRouter.post("/statusCatalog", createstatusCatalog)
statusCatalogRouter.put("/statusCatalog/:id", updatestatusCatalog)
statusCatalogRouter.delete("/statusCatalog/:id", deletestatusCatalog)
