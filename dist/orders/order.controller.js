"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrders = exports.updateOrders = exports.createOrders = exports.getSingleOrders = exports.listOrders = void 0;
const order_service_1 = require("./order.service");
const listOrders = async (c) => {
    const data = await (0, order_service_1.ordersService)();
    if (data == null) {
        return c.text("no orders found!😶‍🌫️👽", 404);
    }
    return c.json(data, 200);
};
exports.listOrders = listOrders;
//get single city
const getSingleOrders = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const orders = await (0, order_service_1.getOrdersService)(id);
    if (orders == undefined) {
        return c.text("orders not found!👽", 404);
    }
    return c.json(orders, 200);
};
exports.getSingleOrders = getSingleOrders;
//create restaurant
const createOrders = async (c) => {
    try {
        const orders = await c.req.json();
        const createdOrders = await (0, order_service_1.createOrdersService)(orders);
        if (!createdOrders) {
            return c.text("orders not created!👽", 404);
        }
        return c.json({ msg: createdOrders }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOrders = createOrders;
//update city
const updateOrders = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const orders = await c.req.json();
    try {
        //search for city
        const foundOrders = await (0, order_service_1.getOrdersService)(id);
        if (foundOrders == undefined)
            return c.text("orders not found!👽", 404);
        //get the data and update
        const res = await (0, order_service_1.updateOrdersService)(id, orders);
        //return the updated city
        if (!res)
            return c.text("orders not updated!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOrders = updateOrders;
//delete city
const deleteOrders = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    try {
        const orders = await (0, order_service_1.getOrdersService)(id);
        if (orders == undefined)
            return c.text("orders not found!👽", 404);
        const res = await (0, order_service_1.deleteOrdersService)(id);
        if (!res)
            return c.text("orders not deleted!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOrders = deleteOrders;
