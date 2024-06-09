"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCity = exports.updateCity = exports.createCity = exports.getSingleCity = exports.listCities = void 0;
const city_service_1 = require("./city.service");
const listCities = async (c) => {
    const data = await (0, city_service_1.cityService)();
    if (data == null) {
        return c.text("no city found!😶‍🌫️👽", 404);
    }
    return c.json(data, 200);
};
exports.listCities = listCities;
//get single city
const getSingleCity = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const city = await (0, city_service_1.getCityService)(id);
    if (city == undefined) {
        return c.text("city not found!👽", 404);
    }
    return c.json(city, 200);
};
exports.getSingleCity = getSingleCity;
//create city
const createCity = async (c) => {
    try {
        const city = await c.req.json();
        const createdCity = await (0, city_service_1.createCityService)(city);
        if (!createdCity) {
            return c.text("city not created!👽", 404);
        }
        return c.json({ msg: createdCity }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createCity = createCity;
//update city
const updateCity = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const city = await c.req.json();
    try {
        //search for city
        const foundcity = await (0, city_service_1.getCityService)(id);
        if (foundcity == undefined)
            return c.text("city not found!👽", 404);
        //get the data and update
        const res = await (0, city_service_1.updateCityService)(id, city);
        //return the updated city
        if (!res)
            return c.text("city not updated!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateCity = updateCity;
//delete city
const deleteCity = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    try {
        const city = await (0, city_service_1.getCityService)(id);
        if (city == undefined)
            return c.text("city not found!👽", 404);
        const res = await (0, city_service_1.deleteCityService)(id);
        if (!res)
            return c.text("user not deleted!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteCity = deleteCity;
