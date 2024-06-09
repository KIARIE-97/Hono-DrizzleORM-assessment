"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddress = exports.updateAddress = exports.createAddress = exports.getSingleAddress = exports.listaddress = void 0;
const address_service_1 = require("./address.service");
//get all addressess
const listaddress = async (c) => {
    const data = await (0, address_service_1.addressService)();
    if (data == null) {
        return c.text("no address found!😶‍🌫️👽", 404);
    }
    return c.json(data, 200);
};
exports.listaddress = listaddress;
//get single address
const getSingleAddress = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const address = await (0, address_service_1.getAddressService)(id);
    if (address == undefined) {
        return c.text("address not found!👽", 404);
    }
    return c.json(address, 200);
};
exports.getSingleAddress = getSingleAddress;
//create address
const createAddress = async (c) => {
    try {
        const address = await c.req.json();
        const createdAddress = await (0, address_service_1.createAddressService)(address);
        if (!createdAddress) {
            return c.text("address not created!👽", 404);
        }
        return c.json({ msg: createdAddress }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createAddress = createAddress;
//update address
const updateAddress = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    const address = await c.req.json();
    try {
        //search for address
        const foundaddress = await (0, address_service_1.getAddressService)(id);
        if (foundaddress == undefined)
            return c.text("address not found!👽", 404);
        //get the data and update
        const res = await (0, address_service_1.updateAddressService)(id, address);
        //return the updated address
        if (!res)
            return c.text("address not updated!👽", 404);
        return c.json({ msg: res }, 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateAddress = updateAddress;
//delete address
const deleteAddress = async (c) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id))
        return c.text("invalid ID!", 400);
    try {
        const address = await (0, address_service_1.getAddressService)(id);
        if (address == undefined)
            return c.text("user not found!👽", 404);
        //delete the user
        const res = await (0, address_service_1.deleteAddressService)(id);
        if (!res)
            return c.text("user not deleted!👽", 404);
        return c.json({ msg: address }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteAddress = deleteAddress;
