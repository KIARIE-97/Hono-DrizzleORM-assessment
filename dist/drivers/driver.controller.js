"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDriver = exports.updateDriver = exports.createDriver = exports.getSingleDriver = exports.listDrivers = void 0;
const driver_service_1 = require("./driver.service");
const listDrivers = async (c) => {
    const data = await (0, driver_service_1.driverService)();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404);
    }
    return c.json(data, 200);
};
exports.listDrivers = listDrivers;
////get single driver
const getSingleDriver = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const user = await (0, driver_service_1.getDriverService)(id);
    if (user == undefined) {
        return c.text("user not found!👽", 404);
    }
    return c.json(user, 200);
};
exports.getSingleDriver = getSingleDriver;
//create driver
const createDriver = async (c) => {
    try {
        const user = await c.req.json();
        const createdDriver = await (0, driver_service_1.createDriverService)(user);
        if (!createdDriver) {
            return c.text("user not created!👽", 404);
        }
        return c.json({ msg: createdDriver }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createDriver = createDriver;
//update driver
const updateDriver = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const user = await c.req.json();
    try {
        //search for user
        const foundDriver = await (0, driver_service_1.getDriverService)(id);
        if (foundDriver == undefined)
            return c.text("user not found!👽", 404);
        //get the data and update
        const res = await (0, driver_service_1.updateDriverService)(id, user);
        //return the updated user
        if (!res)
            return c.text("user not updated!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateDriver = updateDriver;
//delete driver
const deleteDriver = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    try {
        //search for the user
        const driver = await (0, driver_service_1.getDriverService)(id);
        if (driver == undefined)
            return c.text("user not found!👽", 404);
        //delete the user
        const res = await (0, driver_service_1.deleteDriverService)(id);
        if (!res)
            return c.text("user not deleted!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteDriver = deleteDriver;
