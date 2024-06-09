"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsers = void 0;
const userrelation_service_1 = require("./userrelation.service");
const listUsers = async (c) => {
    try {
        const data = await (0, userrelation_service_1.getUsersWithRelations)();
        if (!data || data.length === 0) {
            return c.text("no user found!😶‍🌫️👽", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listUsers = listUsers;
