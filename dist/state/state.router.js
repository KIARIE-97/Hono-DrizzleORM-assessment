"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateRouter = void 0;
const hono_1 = require("hono");
const zod_validator_1 = require("@hono/zod-validator");
const state_controller_1 = require("./state.controller");
const validators_1 = require("../validators");
exports.stateRouter = new hono_1.Hono();
exports.stateRouter.get("/states", state_controller_1.listState);
exports.stateRouter.get("/states/:id", state_controller_1.getSingleState);
exports.stateRouter.post("/states", (0, zod_validator_1.zValidator)('json', validators_1.stateSchema, (results, c) => {
    if (!results.success) {
        return c.json(results.error, 400);
    }
}), state_controller_1.createState);
exports.stateRouter.put("/states/:id", state_controller_1.updateState);
exports.stateRouter.delete("/states/:id", state_controller_1.deleteState);
