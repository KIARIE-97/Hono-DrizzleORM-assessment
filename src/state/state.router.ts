import {  Hono } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listState, getSingleState, createState, updateState,listspecificstates, deleteState } from "./state.controller";
import { get } from "http";
import { stateSchema } from "../validators";
import {adminRoleAuth, userRoleAuth, adminUserRoleAuth} from "../middlewares/bearAuth"

export const stateRouter = new Hono();

stateRouter.get("/states", adminRoleAuth, listState);
stateRouter.get("/states/:id", adminUserRoleAuth, getSingleState);
stateRouter.post("/states", zValidator('json', stateSchema, (results, c) => {
    if (!results.success){
        return c.json(results.error, 400)
    }
}) ,createState);
stateRouter.put("/states/:id", adminUserRoleAuth, updateState)
stateRouter.delete("/states/:id", adminRoleAuth, deleteState) 