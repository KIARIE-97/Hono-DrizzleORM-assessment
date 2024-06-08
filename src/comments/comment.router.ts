import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listComment, getSingleComment, createComment, updateComment, deleteComment } from "./comment.controller";
import { get } from "http";
// import { restaurantsSchema } from "../validators";

export const commentRouter = new Hono();

commentRouter.get("/comment", listComment)
commentRouter.get("/comment/:id", getSingleComment)
commentRouter.post("/comment", createComment)
commentRouter.put("/comment/:id", updateComment)
commentRouter.delete("/comment/:id", deleteComment)
