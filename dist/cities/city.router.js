"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityRouter = void 0;
const hono_1 = require("hono");
const zod_validator_1 = require("@hono/zod-validator");
const city_controller_1 = require("./city.controller");
const validators_1 = require("../validators");
exports.cityRouter = new hono_1.Hono();
exports.cityRouter.get("/cities", city_controller_1.listCities);
exports.cityRouter.get("/cities/:id", city_controller_1.getSingleCity);
exports.cityRouter.post("/cities", (0, zod_validator_1.zValidator)('json', validators_1.citySchema, (results, c) => {
    if (!results.success) {
        return c.json(results.error, 400);
    }
}), city_controller_1.createCity);
exports.cityRouter.put("/cities/:id", city_controller_1.updateCity);
exports.cityRouter.delete("/cities/:id", city_controller_1.deleteCity);
