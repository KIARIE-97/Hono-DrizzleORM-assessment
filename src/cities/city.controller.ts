import { Context } from "hono";
import { cityService, getCityService, createCityService, updateCityService, deleteCityService } from "./city.service";

export const listCities = async (c: Context) => {
    const data = await cityService();
    if (data == null) {
        return c.text("no city found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

//get single city
export const getSingleCity = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const city = await getCityService(id);
    if (city == undefined){
        return c.text("city not found!👽", 404);
    }
    return c.json(city, 200);
}

//create city
export const createCity = async (c: Context) => {
  try{
    const city = await c.req.json();
    const createdCity = await createCityService(city);
   if (!createdCity){
    return c.text("city not created!👽", 404)
   }
    return c.json({msg: createdCity}, 201);
} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//update city
export const updateCity = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const city = await c.req.json();
    try{
    //search for city
    const foundcity = await getCityService(id);
    if (foundcity == undefined) 
        return c.text("city not found!👽", 404);
    //get the data and update
    const res = await updateCityService(id, city);
    //return the updated city
    if (!res ) 
        return c.text("city not updated!👽", 404); 
    return c.json({msg: res}, 201);

} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//delete city
export const deleteCity = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    try{
        const city = await getCityService(id);
    if (city == undefined)
        return c.text("city not found!👽", 404);
    
    const res = await deleteCityService(id);
    if (!res) return c.text("user not deleted!👽", 404);

    return c.json({msg: res}, 201);

    }catch(error: any){
        return c.json({error: error?.message}, 400)
    }
    
}