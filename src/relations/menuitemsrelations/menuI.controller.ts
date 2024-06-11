
import { Context } from "hono";
import { getmenuWithrestaurantService, getmenuWithcategoryService, getmenuWithOrdersService } from "./menuI.service";

export const listMenuitemsWithrestaurant = async (c: Context) => {
    const data = await getmenuWithrestaurantService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}
export const listMenuitemsWithcategory = async (c: Context) => {
    const data = await getmenuWithcategoryService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}
export const listMenuitemsWithOrders = async (c: Context) => {
    const data = await getmenuWithOrdersService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

 
