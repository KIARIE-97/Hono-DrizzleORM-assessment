"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletestatusCatalog = exports.updatestatusCatalog = exports.createstatusCatalog = exports.getSinglestatusCatalog = exports.liststatusCatalog = void 0;
const statusC_service_1 = require("./statusC.service");
const liststatusCatalog = async (c) => {
    const data = await (0, statusC_service_1.statusCatalogService)();
    if (data == null) {
        return c.text("no statusCatalog found!😶‍🌫️👽", 404);
    }
    return c.json(data, 200);
};
exports.liststatusCatalog = liststatusCatalog;
//get single city
const getSinglestatusCatalog = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const statusCatalog = await (0, statusC_service_1.getstatusCatalogService)(id);
    if (statusCatalog == undefined) {
        return c.text("statusCatalog not found!👽", 404);
    }
    return c.json(statusCatalog, 200);
};
exports.getSinglestatusCatalog = getSinglestatusCatalog;
//create restaurant
const createstatusCatalog = async (c) => {
    try {
        const statusCatalog = await c.req.json();
        const createdstatusCatalog = await (0, statusC_service_1.createstatusCatalogService)(statusCatalog);
        if (!createdstatusCatalog) {
            return c.text("restaurant not created!👽", 404);
        }
        return c.json({ msg: createdstatusCatalog }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createstatusCatalog = createstatusCatalog;
//update city
const updatestatusCatalog = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const statusCatalog = await c.req.json();
    try {
        //search for city
        const foundstatusCatalog = await (0, statusC_service_1.getstatusCatalogService)(id);
        if (foundstatusCatalog == undefined)
            return c.text("statusCatalog not found!👽", 404);
        //get the data and update
        const res = await (0, statusC_service_1.updatestatusCatalogService)(id, statusCatalog);
        //return the updated city
        if (!res)
            return c.text("statusCatalog not updated!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updatestatusCatalog = updatestatusCatalog;
//delete city
const deletestatusCatalog = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    try {
        const statusCatalog = await (0, statusC_service_1.getstatusCatalogService)(id);
        if (statusCatalog == undefined)
            return c.text("statusCatalog not found!👽", 404);
        const res = await (0, statusC_service_1.deletestatusCatalogService)(id);
        if (!res)
            return c.text("statusCatalog not deleted!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deletestatusCatalog = deletestatusCatalog;
