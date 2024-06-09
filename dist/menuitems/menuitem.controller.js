"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletemenuItem = exports.updatemenuItem = exports.createmenuItem = exports.getSinglemenuItem = exports.listMenu = void 0;
const menuitem_service_1 = require("./menuitem.service");
const listMenu = async (c) => {
    const data = await (0, menuitem_service_1.menuService)();
    if (data == null) {
        return c.text("no menuItem found!😶‍🌫️👽", 404);
    }
    return c.json(data, 200);
};
exports.listMenu = listMenu;
//get single menu
const getSinglemenuItem = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const menuItem = await (0, menuitem_service_1.getMenuService)(id);
    if (menuItem == undefined) {
        return c.text("menuItem not found!👽", 404);
    }
    return c.json(menuItem, 200);
};
exports.getSinglemenuItem = getSinglemenuItem;
//create restaurant
const createmenuItem = async (c) => {
    try {
        const menuItem = await c.req.json();
        const createdmenuItem = await (0, menuitem_service_1.createMenuService)(menuItem);
        if (!createdmenuItem) {
            return c.text("menuItem not created!👽", 404);
        }
        return c.json({ msg: createdmenuItem }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createmenuItem = createmenuItem;
//update menuItem
const updatemenuItem = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const menuItem = await c.req.json();
    try {
        //search for city
        const foundmenuItem = await (0, menuitem_service_1.getMenuService)(id);
        if (foundmenuItem == undefined)
            return c.text("menuItem not found!👽", 404);
        //get the data and update
        const res = await (0, menuitem_service_1.updateMenuService)(id, menuItem);
        //return the updated city
        if (!res)
            return c.text("menuItem not updated!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updatemenuItem = updatemenuItem;
//delete city
const deletemenuItem = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    try {
        const menuItem = await (0, menuitem_service_1.getMenuService)(id);
        if (menuItem == undefined)
            return c.text("menuItem not found!👽", 404);
        const res = await (0, menuitem_service_1.deleteMenuService)(id);
        if (!res)
            return c.text("menuItem not deleted!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deletemenuItem = deletemenuItem;
