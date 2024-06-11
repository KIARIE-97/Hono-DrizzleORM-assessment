"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersRouter = void 0;
const hono_1 = require("hono");
const order_controller_1 = require("./order.controller");
// import { restaurantsSchema } from "../validators";
exports.ordersRouter = new hono_1.Hono();
exports.ordersRouter.get("/orders", order_controller_1.listOrders);
exports.ordersRouter.get("/orders/:id", order_controller_1.getSingleOrders);
exports.ordersRouter.post("/orders", order_controller_1.createOrders);
exports.ordersRouter.put("/orders/:id", order_controller_1.updateOrders);
exports.ordersRouter.delete("/orders/:id", order_controller_1.deleteOrders);