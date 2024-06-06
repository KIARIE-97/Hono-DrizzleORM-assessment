import {  Hono } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listState, getSingleState, createState, updateState, deleteState } from "./state.controller";
import { get } from "http";
import { stateSchema } from "../validators";

export const stateRouter = new Hono();

stateRouter.get("/states", listState);
stateRouter.get("/states/:id", getSingleState);
stateRouter.post("/states", zValidator('json', stateSchema, (results, c) => {
    if (!results.success){
        return c.json(results.error, 400)
    }
}) ,createState);
stateRouter.put("/states/:id", updateState)
stateRouter.delete("/states/:id", deleteState)