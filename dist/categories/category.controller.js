"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getSingleCategory = exports.listCategory = void 0;
const category_service_1 = require("./category.service");
const listCategory = async (c) => {
    const data = await (0, category_service_1.categoryService)();
    if (data == null) {
        return c.text("no Category found!😶‍🌫️👽", 404);
    }
    return c.json(data, 200);
};
exports.listCategory = listCategory;
//get single city
const getSingleCategory = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const category = await (0, category_service_1.getCategoryService)(id);
    if (category == undefined) {
        return c.text("restaurant not found!👽", 404);
    }
    return c.json(category, 200);
};
exports.getSingleCategory = getSingleCategory;
//create restaurant
const createCategory = async (c) => {
    try {
        const category = await c.req.json();
        const createdCategory = await (0, category_service_1.createCategoryService)(category);
        if (!createdCategory) {
            return c.text("Category not created!👽", 404);
        }
        return c.json({ msg: createdCategory }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createCategory = createCategory;
//update city
const updateCategory = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const category = await c.req.json();
    try {
        //search for city
        const foundCategory = await (0, category_service_1.getCategoryService)(id);
        if (foundCategory == undefined)
            return c.text("Category not found!👽", 404);
        //get the data and update
        const res = await (0, category_service_1.updateCategoryService)(id, category);
        //return the updated city
        if (!res)
            return c.text("Category not updated!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateCategory = updateCategory;
//delete city
const deleteCategory = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    try {
        const category = await (0, category_service_1.getCategoryService)(id);
        if (category == undefined)
            return c.text("city not found!👽", 404);
        const res = await (0, category_service_1.deleteCategoryService)(id);
        if (!res)
            return c.text("restaurant not deleted!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteCategory = deleteCategory;
