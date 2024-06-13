import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listCategory, getSingleCategory, listcategoryWithmenuitem,  createCategory, updateCategory, deleteCategory } from "./category.controller";
import { get } from "http";
// import { restaurantsSchema } from "../validators";

export const categoryRouter = new Hono();

categoryRouter.get("/category", listCategory)
categoryRouter.get("/categoryrelation", listcategoryWithmenuitem)
categoryRouter.get("/category/:id", getSingleCategory)
categoryRouter.post("/category", createCategory)
categoryRouter.put("/category/:id", updateCategory)
categoryRouter.delete("/category/:id", deleteCategory)
