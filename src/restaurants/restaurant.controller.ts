import { Context } from "hono";
import { restaurantService, getRestaurantService, createRestaurantService, updateRestaurantService, deleteRestaurantService } from "./restaurant.service";

export const listRestaurant = async (c: Context) => {
    const data = await restaurantService();
    if (data == null) {
        return c.text("no restaurant found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

//get single city
export const getSingleRestaurant= async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const restaurant = await getRestaurantService(id);
    if (restaurant == undefined){
        return c.text("restaurant not found!👽", 404);
    }
    return c.json(restaurant, 200);
}

//create restaurant
export const createRestaurant = async (c: Context) => {
  try{
    const restaurant = await c.req.json();
    const createdRestaurant = await createRestaurantService(restaurant);
   if (!createdRestaurant){
    return c.text("restaurant not created!👽", 404)
   }
    return c.json({msg: createdRestaurant}, 201);
} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//update city
export const updateRestaurant = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const restaurant = await c.req.json();
    try{
    //search for city
    const foundRestaurant = await getRestaurantService(id);
    if (foundRestaurant == undefined) 
        return c.text("city not found!👽", 404);
    //get the data and update
    const res = await updateRestaurantService(id, restaurant);
    //return the updated city
    if (!res ) 
        return c.text("city not updated!👽", 404); 
    return c.json({msg: res}, 201);

} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//delete city
export const deleteRestaurant = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    try{
        const restaurant = await getRestaurantService(id);
    if (restaurant == undefined)
        return c.text("city not found!👽", 404);
    
    const res = await deleteRestaurantService(id);
    if (!res) return c.text("restaurant not deleted!👽", 404);

    return c.json({msg: res}, 201);

    }catch(error: any){
        return c.json({error: error?.message}, 400)
    }
    
}