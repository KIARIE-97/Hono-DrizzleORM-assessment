import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import {TIRestaurant, TSRestaurant, restaurantTable} from "../drizzle/schema";

export const restaurantService = async (): Promise<TSRestaurant[] | null> => {
    return await db.query.restaurantTable.findMany()
}

//get one restaurant
export const getRestaurantService = async (id: number): Promise<TIRestaurant | undefined> => {
    return await db.query.restaurantTable.findFirst({
        where: eq(restaurantTable.id, id) 
    })
}

//create restaurant
export const createRestaurantService = async (restaurant: TIRestaurant): Promise<TIRestaurant> => {
    await db.insert(restaurantTable).values(restaurant)
    return restaurant;

}
//update restaurant
export const updateRestaurantService = async (id: number, restaurant: TIRestaurant): Promise<TIRestaurant> => {

    await db.update(restaurantTable).set(restaurant).where(eq(restaurantTable.id, id))
    return restaurant;
}
//.delete restaurant
export const deleteRestaurantService = async (id: number) => {
    await db.delete(restaurantTable).where(eq(restaurantTable.id, id))
    return "user deleted successfully!😑"
}