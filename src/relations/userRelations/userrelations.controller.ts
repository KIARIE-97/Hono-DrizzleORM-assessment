
import { Context } from "hono";
import { getUsersWithcommentService, getDriversWithUserService, getUsersWithAddressService, getUsersWithOrdersService } from "./userrelation.service";

export const listUsersWithcommentS = async (c: Context) => {
    const data = await getUsersWithcommentService();
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
export const listUsersWithOrders = async (c: Context) => {
    const data = await getUsersWithOrdersService();
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
 
