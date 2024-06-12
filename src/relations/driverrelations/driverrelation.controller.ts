

import { Context } from "hono";
import { getdriversWithUserService, getdriversWithOrdersService } from "./driverrelation.service";

export const listdriversWithuser = async (c: Context) => {
    const data = await getdriversWithUserService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

export const listdriversWithOrders = async (c: Context) => {
    const data = await getdriversWithOrdersService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

 


