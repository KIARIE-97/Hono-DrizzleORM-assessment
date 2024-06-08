import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import {TIOrderStatus, TSOrderStatus, order_statusTable} from "../drizzle/schema";

export const orderStatusService = async (): Promise<TSOrderStatus[] | null> => {
    return await db.query.order_statusTable.findMany()
}

//get one restaurant
export const getOrderStatusService = async (id: number): Promise<TIOrderStatus | undefined> => {
    return await db.query.order_statusTable.findFirst({
        where: eq(order_statusTable.id, id) 
    })
}

//create restaurant
export const createStatusOrderService = async (orderStatus: TIOrderStatus): Promise<TIOrderStatus> => {
    await db.insert(order_statusTable).values(orderStatus)
    return orderStatus;

}
//update restaurant
export const updateOrderStatusService = async (id: number, orderStatus: TIOrderStatus): Promise<TIOrderStatus> => {

    await db.update(order_statusTable).set(orderStatus).where(eq(order_statusTable.id, id))
    return orderStatus;
}
//.delete restaurant
export const deleteOrderStatusService = async (id: number) => {
    await db.delete(order_statusTable).where(eq(order_statusTable.id, id))
    return "user deleted successfully!😑"
}