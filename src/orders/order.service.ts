import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import {TIOrders, TSOrders, ordersTable} from "../drizzle/schema";

export const ordersService = async (): Promise<TSOrders[] | null> => {
    return await db.query.ordersTable.findMany()
}

//get one restaurant
export const getOrdersService = async (id: number): Promise<TIOrders | undefined> => {
    return await db.query.ordersTable.findFirst({
        where: eq(ordersTable.id, id) 
    })
}

//create restaurant
export const createOrdersService = async (orders: TIOrders): Promise<TIOrders> => {
    await db.insert(ordersTable).values(orders)
    return orders;

}
//update restaurant
export const updateOrdersService = async (id: number, orders: TIOrders): Promise<TIOrders> => {

    await db.update(ordersTable).set(orders).where(eq(ordersTable.id, id))
    return orders;
}
//.delete restaurant
export const deleteOrdersService = async (id: number) => {
    await db.delete(ordersTable).where(eq(ordersTable.id, id))
    return "orders deleted successfully!😑"
}