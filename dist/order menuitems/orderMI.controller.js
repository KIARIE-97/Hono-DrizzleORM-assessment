"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteorderMenuItem = exports.updateorderMenuItem = exports.createorderMenuItem = exports.getSingleorderMenuItem = exports.listorderMenuItem = void 0;
const orderMI_service_1 = require("./orderMI.service");
const listorderMenuItem = async (c) => {
    const data = await (0, orderMI_service_1.orderMenuItemService)();
    if (data == null) {
        return c.text("no orderMenuItem found!😶‍🌫️👽", 404);
    }
    return c.json(data, 200);
};
exports.listorderMenuItem = listorderMenuItem;
//get single city
const getSingleorderMenuItem = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const orderMenuItem = await (0, orderMI_service_1.getorderMenuItemService)(id);
    if (orderMenuItem == undefined) {
        return c.text("orderMenuItem not found!👽", 404);
    }
    return c.json(orderMenuItem, 200);
};
exports.getSingleorderMenuItem = getSingleorderMenuItem;
//create restaurant
const createorderMenuItem = async (c) => {
    try {
        const orderMenuItem = await c.req.json();
        const createdorderMenuItem = await (0, orderMI_service_1.createorderMenuItemService)(orderMenuItem);
        if (!createdorderMenuItem) {
            return c.text("orderMenuItem not created!👽", 404);
        }
        return c.json({ msg: createdorderMenuItem }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createorderMenuItem = createorderMenuItem;
//update city
const updateorderMenuItem = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const orderMenuItem = await c.req.json();
    try {
        //search for city
        const foundorderMenuItem = await (0, orderMI_service_1.getorderMenuItemService)(id);
        if (foundorderMenuItem == undefined)
            return c.text("orderMenuItem not found!👽", 404);
        //get the data and update
        const res = await (0, orderMI_service_1.updateorderMenuItemService)(id, orderMenuItem);
        //return the updated city
        if (!res)
            return c.text("orderMenuItem not updated!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateorderMenuItem = updateorderMenuItem;
//delete city
const deleteorderMenuItem = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    try {
        const orderMenuItem = await (0, orderMI_service_1.getorderMenuItemService)(id);
        if (orderMenuItem == undefined)
            return c.text("orderMenuItem not found!👽", 404);
        const res = await (0, orderMI_service_1.deleteorderMenuItemService)(id);
        if (!res)
            return c.text("orderMenuItem not deleted!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteorderMenuItem = deleteorderMenuItem;
