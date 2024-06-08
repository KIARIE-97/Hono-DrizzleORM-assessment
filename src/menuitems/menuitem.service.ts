import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import {TIMenuItem, TSMenuItem, menu_itemTable} from "../drizzle/schema";


export const menuService = async (): Promise<TSMenuItem[] | null> => {
    return await db.query.menu_itemTable.findMany()
}

//get one restaurant
export const getMenuService = async (id: number): Promise<TIMenuItem | undefined> => {
    return await db.query.menu_itemTable.findFirst({
        where: eq(menu_itemTable.id, id) 
    })
}

//create restaurant
export const createMenuService = async (menu: TIMenuItem): Promise<TIMenuItem> => {
    await db.insert(menu_itemTable).values(menu)
    return menu;

}
//update restaurant
export const updateMenuService = async (id: number, menu: TIMenuItem): Promise<TIMenuItem> => {

    await db.update(menu_itemTable).set(menu).where(eq(menu_itemTable.id, id))
    return menu;
}
//.delete restaurant
export const deleteMenuService = async (id: number) => {
    await db.delete(menu_itemTable).where(eq(menu_itemTable.id, id))
    return "menu deleted successfully!😑"
}