"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const hono_1 = require("hono");
const comment_controller_1 = require("./comment.controller");
// import { restaurantsSchema } from "../validators";
exports.commentRouter = new hono_1.Hono();
exports.commentRouter.get("/comment", comment_controller_1.listComment);
exports.commentRouter.get("/comment/:id", comment_controller_1.getSingleComment);
exports.commentRouter.post("/comment", comment_controller_1.createComment);
exports.commentRouter.put("/comment/:id", comment_controller_1.updateComment);
exports.commentRouter.delete("/comment/:id", comment_controller_1.deleteComment);