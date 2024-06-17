import {  Hono } from "hono";
import { type Context } from "hono";
import {zValidator} from "@hono/zod-validator";
import { listUsers, getSingleUser, createUser, updateUser, deleteUser } from "./user.controller";
import { get } from "http";
import { userSchema } from "../validators";
import {adminRoleAuth, userRoleAuth, adminUserRoleAuth} from "../middlewares/bearAuth"

export const userRouter = new Hono();

userRouter.get("/users",listUsers)
userRouter.get("/users/:id", userRoleAuth, getSingleUser)
userRouter.post("/users", zValidator('json', userSchema, (results, c) => {
    if (!results.success){
        return c.json(results.error, 400)
    }
}) ,createUser)
userRouter.put("/users/:id",adminUserRoleAuth, updateUser)
userRouter.delete("/users/:id", adminRoleAuth, deleteUser)

    //get single user
    // userRouter.get("/users/:id", (c: Context) => {
    //     const id = Number(c.req.param("id"));
    //     const user = users.find((user) => user.id === id)
  
    //     if (!user){
    //         return c.text("user not found!😶‍🌫️👽", 404)
    //     }
  
    //     return c.json(user, 200)
    // })