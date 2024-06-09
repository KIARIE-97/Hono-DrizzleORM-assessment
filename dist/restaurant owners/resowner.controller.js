"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurant = exports.updateRestaurant = exports.createRestaurant = exports.getSingleRestaurant = exports.listRestaurant = void 0;
const resowner_service_1 = require("./resowner.service");
const listRestaurant = async (c) => {
    const data = await (0, resowner_service_1.restaurantService)();
    if (data == null) {
        return c.text("no restaurant found!😶‍🌫️👽", 404);
    }
    return c.json(data, 200);
};
exports.listRestaurant = listRestaurant;
//get single Restaurant
const getSingleRestaurant = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const restaurant = await (0, resowner_service_1.getRestaurantService)(id);
    if (restaurant == undefined) {
        return c.text("Restaurant not found!👽", 404);
    }
    return c.json(restaurant, 200);
};
exports.getSingleRestaurant = getSingleRestaurant;
//create Restaurant
const createRestaurant = async (c) => {
    try {
        const restaurant = await c.req.json();
        const createdRestaurant = await (0, resowner_service_1.createRestaurantService)(restaurant);
        if (!createdRestaurant) {
            return c.text("Restaurant not created!👽", 404);
        }
        return c.json({ msg: createdRestaurant }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createRestaurant = createRestaurant;
//update Restaurant
const updateRestaurant = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const restaurant = await c.req.json();
    try {
        //search for Restaurant
        const foundRestaurant = await (0, resowner_service_1.getRestaurantService)(id);
        if (foundRestaurant == undefined)
            return c.text("Restaurant not found!👽", 404);
        //get the data and update
        const res = await (0, resowner_service_1.updateRestaurantService)(id, restaurant);
        //return the updated restaurant
        if (!res)
            return c.text("Restaurant not updated!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateRestaurant = updateRestaurant;
//delete restaurant
const deleteRestaurant = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    try {
        const restaurant = await (0, resowner_service_1.getRestaurantService)(id);
        if (restaurant == undefined)
            return c.text("Restaurant not found!👽", 404);
        const res = await (0, resowner_service_1.deleteRestaurantService)(id);
        if (!res)
            return c.text("Restaurant not deleted!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteRestaurant = deleteRestaurant;
