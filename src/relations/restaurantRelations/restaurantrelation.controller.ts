import { Context } from "hono";
import { getrestaurantWithcityService, getrestaurantWithmenuitemsService, getrestaurantWithOrdersService } from "./restaurantrelation.service";

export const listRestaurantWithcity = async (c: Context) => {
    const data = await getrestaurantWithcityService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}
export const listRestauranWithmenuitems = async (c: Context) => {
    const data = await getrestaurantWithmenuitemsService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}
export const listRestauranWithOrders = async (c: Context) => {
    const data = await getrestaurantWithOrdersService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

 
