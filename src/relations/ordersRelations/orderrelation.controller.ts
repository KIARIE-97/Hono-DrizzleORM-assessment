import { Context } from "hono";
import { getOrdersWithcommentService, getOrderssWithAddressService, getOrdersWithRestaurantService } from "./orderrelation.service";

export const listOrderssWithcommentS = async (c: Context) => {
    const data = await getOrdersWithcommentService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}
export const listOrdersWithAddress = async (c: Context) => {
    const data = await getOrderssWithAddressService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}
export const listOrdersWithRestaurant = async (c: Context) => {
    const data = await getOrdersWithRestaurantService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}