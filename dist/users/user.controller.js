"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getSingleUser = exports.listUsers = void 0;
const user_service_1 = require("./user.service");
const listUsers = async (c) => {
    const data = await (0, user_service_1.userService)();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404);
    }
    return c.json(data, 200);
};
exports.listUsers = listUsers;
//get single user
const getSingleUser = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const user = await (0, user_service_1.getUserService)(id);
    if (user == undefined) {
        return c.text("user not found!👽", 404);
    }
    return c.json(user, 200);
};
exports.getSingleUser = getSingleUser;
//create user
const createUser = async (c) => {
    try {
        const user = await c.req.json();
        const createdUser = await (0, user_service_1.createUserService)(user);
        if (!createdUser) {
            return c.text("user not created!👽", 404);
        }
        return c.json({ msg: createdUser }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createUser = createUser;
//update user
const updateUser = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const user = await c.req.json();
    try {
        //search for user
        const founduser = await (0, user_service_1.getUserService)(id);
        if (founduser == undefined)
            return c.text("user not found!👽", 404);
        //get the data and update
        const res = await (0, user_service_1.updateUserService)(id, user);
        //return the updated user
        if (!res)
            return c.text("user not updated!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateUser = updateUser;
//delete user
const deleteUser = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    try {
        //search for the user
        const user = await (0, user_service_1.getUserService)(id);
        if (user == undefined)
            return c.text("user not found!👽", 404);
        //delete the user
        const res = await (0, user_service_1.deleteUserService)(id);
        if (!res)
            return c.text("user not deleted!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteUser = deleteUser;
