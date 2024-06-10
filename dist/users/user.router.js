"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const hono_1 = require("hono");
const zod_validator_1 = require("@hono/zod-validator");
const user_controller_1 = require("./user.controller");
const validators_1 = require("../validators");
const bearAuth_1 = require("../middlewares/bearAuth");
exports.userRouter = new hono_1.Hono();
const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com"
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane@gmail.com"
    }
];
exports.userRouter.get("/users", bearAuth_1.adminRoleAuth, user_controller_1.listUsers);
exports.userRouter.get("/users/:id", bearAuth_1.userRoleAuth, user_controller_1.getSingleUser);
exports.userRouter.post("/users", (0, zod_validator_1.zValidator)('json', validators_1.userSchema, (results, c) => {
    if (!results.success) {
        return c.json(results.error, 400);
    }
}), user_controller_1.createUser);
exports.userRouter.put("/users/:id", user_controller_1.updateUser);
exports.userRouter.delete("/users/:id", user_controller_1.deleteUser);
//get single user
// userRouter.get("/users/:id", (c: Context) => {
//     const id = Number(c.req.param("id"));
//     const user = users.find((user) => user.id === id)
//     if (!user){
//         return c.text("user not found!😶‍🌫️👽", 404)
//     }
//     return c.json(user, 200)
// })
