"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurant = exports.updateorderStatus = exports.createorderStatus = exports.getSingleorderStatus = exports.listorderStatus = void 0;
const orderS_service_1 = require("./orderS.service");
const listorderStatus = async (c) => {
    const data = await (0, orderS_service_1.orderStatusService)();
    if (data == null) {
        return c.text("no orderStatus found!😶‍🌫️👽", 404);
    }
    return c.json(data, 200);
};
exports.listorderStatus = listorderStatus;
//get single city
const getSingleorderStatus = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const orderStatus = await (0, orderS_service_1.getOrderStatusService)(id);
    if (orderStatus == undefined) {
        return c.text("orderStatus not found!👽", 404);
    }
    return c.json(orderStatus, 200);
};
exports.getSingleorderStatus = getSingleorderStatus;
//create restaurant
const createorderStatus = async (c) => {
    try {
        const orderStatus = await c.req.json();
        const createdorderStatus = await (0, orderS_service_1.createStatusOrderService)(orderStatus);
        if (!createdorderStatus) {
            return c.text("orderStatus not created!👽", 404);
        }
        return c.json({ msg: createdorderStatus }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createorderStatus = createorderStatus;
//update city
const updateorderStatus = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const orderStatus = await c.req.json();
    try {
        //search for city
        const foundorderStatus = await (0, orderS_service_1.getOrderStatusService)(id);
        if (foundorderStatus == undefined)
            return c.text("orderStatus not found!👽", 404);
        //get the data and update
        const res = await (0, orderS_service_1.updateOrderStatusService)(id, orderStatus);
        //return the updated city
        if (!res)
            return c.text("orderStatus not updated!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateorderStatus = updateorderStatus;
//delete city
const deleteRestaurant = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    try {
        const orderStatus = await (0, orderS_service_1.getOrderStatusService)(id);
        if (orderStatus == undefined)
            return c.text("orderStatus not found!👽", 404);
        const res = await (0, orderS_service_1.deleteOrderStatusService)(id);
        if (!res)
            return c.text("orderStatus not deleted!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteRestaurant = deleteRestaurant;
