import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import {TIOrderMenuItem, TSOrderMenuItem, order_menu_itemTable} from "../drizzle/schema";

export const orderMenuItemService = async (): Promise<TSOrderMenuItem[] | null> => {
    return await db.query.order_menu_itemTable.findMany()
}

//get one restaurant
export const getorderMenuItemService = async (id: number): Promise<TIOrderMenuItem | undefined> => {
    return await db.query.order_menu_itemTable.findFirst({
        where: eq(order_menu_itemTable.id, id) 
    })
}

//create restaurant
export const createorderMenuItemService = async (restaurant: TIOrderMenuItem): Promise<TIOrderMenuItem> => {
    await db.insert(order_menu_itemTable).values(restaurant)
    return restaurant;

}
//update restaurant
export const updateorderMenuItemService = async (id: number, restaurant: TIOrderMenuItem): Promise<TIOrderMenuItem> => {

    await db.update(order_menu_itemTable).set(restaurant).where(eq(order_menu_itemTable.id, id))
    return restaurant;
}
//.delete restaurant
export const deleteorderMenuItemService = async (id: number) => {
    await db.delete(order_menu_itemTable).where(eq(order_menu_itemTable.id, id))
    return "user deleted successfully!😑"
}