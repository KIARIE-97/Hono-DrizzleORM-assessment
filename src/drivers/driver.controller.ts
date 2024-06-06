import { Context } from "hono";
import { driverService, getDriverService, createDriverService, updateDriverService, deleteDriverService } from "./driver.service";

export const listDrivers = async (c: Context) => {
    const data = await driverService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

////get single driver
export const getSingleDriver = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const user = await getDriverService(id);
    if (user == undefined){
        return c.text("user not found!👽", 404);
    }
    return c.json(user, 200);
} 

//create driver
export const createDriver = async (c: Context) => {
  try{
    const user = await c.req.json();
    const createdDriver = await createDriverService(user);
   if (!createdDriver){
    return c.text("user not created!👽", 404)
   }
    return c.json({msg: createdDriver}, 201);
} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//update driver
export const updateDriver = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const user = await c.req.json();
    try{
    //search for user
    const foundDriver = await getDriverService(id);
    if (foundDriver == undefined) 
        return c.text("user not found!👽", 404);
    //get the data and update
    const res = await updateDriverService(id, user);
    //return the updated user
    if (!res ) 
        return c.text("user not updated!👽", 404); 
    return c.json({msg: res}, 201);

} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//delete driver
export const deleteDriver =  async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    try{

   //search for the user
   const driver = await getDriverService(id);
   if (driver == undefined) 
       return c.text("user not found!👽", 404);
    //delete the user
    const res = await deleteDriverService(id);
    if (!res) return c.text("user not deleted!👽", 404);

    return c.json({msg: res}, 201);

    }catch(error: any){
        return c.json({error: error?.message}, 400)
    }
}