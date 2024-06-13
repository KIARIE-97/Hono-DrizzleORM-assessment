
import { Context } from "hono";
import { getUsersWithcommentService, getDriversWithUserService, getUsersWithAddressService, getUsersWithOrdersService, getsingleUsersWithDriverService  } from "./userrelation.service";

export const listUsersWithcommentS = async (c: Context) => {
    const data = await getUsersWithcommentService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}


export const listUsersWithOrders = async (c: Context) => {
    const data = await getUsersWithOrdersService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

export const listUsersWithAddress = async (c: Context) => {
    const data = await getUsersWithAddressService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}


export const listUsersWithdriver = async (c: Context) => {
    const data = await getDriversWithUserService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

export const listSingleuserWithdrivers = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const state = await getsingleUsersWithDriverService (id);
    if (state == undefined){
        return c.text("user not found!👽", 404);
    }
    return c.json(state, 200);
} 
 
