import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import {TIRestaurantOwner, TSRestaurantOwner, restaurant_ownerTable} from "../drizzle/schema";

export const restaurantService = async (): Promise<TSRestaurantOwner[] | null> => {
    return await db.query.restaurant_ownerTable.findMany()
}

//get one city
export const getRestaurantService = async (id: number): Promise<TIRestaurantOwner | undefined> => {
    return await db.query.restaurant_ownerTable.findFirst({
        where: eq(restaurant_ownerTable.id, id) 
    })
}

//create city
export const createRestaurantService = async (restaurant: TIRestaurantOwner): Promise<TIRestaurantOwner> => {
    await db.insert(restaurant_ownerTable).values(restaurant)
    return restaurant;

}
//update city
export const updateRestaurantService = async (id: number, restaurant: TIRestaurantOwner): Promise<TIRestaurantOwner> => {

    await db.update(restaurant_ownerTable).set(restaurant).where(eq(restaurant_ownerTable.id, id))
    return restaurant;
}
//delete city
export const deleteRestaurantService = async (id: number) => {
    await db.delete(restaurant_ownerTable).where(eq(restaurant_ownerTable.id, id))
    return "user deleted successfully!😑"
}