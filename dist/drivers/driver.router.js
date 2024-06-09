"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverRouter = void 0;
const hono_1 = require("hono");
const zod_validator_1 = require("@hono/zod-validator");
const driver_controller_1 = require("./driver.controller");
const validators_1 = require("../validators");
exports.driverRouter = new hono_1.Hono();
exports.driverRouter.get("/drivers", driver_controller_1.listDrivers);
exports.driverRouter.get("/drivers/:id", driver_controller_1.getSingleDriver);
exports.driverRouter.post("/drivers", (0, zod_validator_1.zValidator)('json', validators_1.driverSchema, (results, c) => {
    if (!results.success) {
        return c.json(results.error, 400);
    }
}), driver_controller_1.createDriver);
exports.driverRouter.put("/drivers/:id", driver_controller_1.updateDriver);
exports.driverRouter.delete("/drivers/:id", driver_controller_1.deleteDriver);
