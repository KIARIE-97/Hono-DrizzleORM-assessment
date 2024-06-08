import { Context } from "hono";
import { orderMenuItemService, getorderMenuItemService, createorderMenuItemService, updateorderMenuItemService, deleteorderMenuItemService } from "./orderMI.service";

export const listorderMenuItem = async (c: Context) => {
    const data = await orderMenuItemService();
    if (data == null) {
        return c.text("no orderMenuItem found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

//get single city
export const getSingleorderMenuItem= async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const orderMenuItem = await getorderMenuItemService(id);
    if (orderMenuItem == undefined){
        return c.text("orderMenuItem not found!👽", 404);
    }
    return c.json(orderMenuItem, 200);
}

//create restaurant
export const createorderMenuItem = async (c: Context) => {
  try{
    const orderMenuItem = await c.req.json();
    const createdorderMenuItem = await createorderMenuItemService(orderMenuItem);
   if (!createdorderMenuItem){
    return c.text("orderMenuItem not created!👽", 404)
   }
    return c.json({msg: createdorderMenuItem}, 201);
} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//update city
export const updateorderMenuItem = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const orderMenuItem = await c.req.json();
    try{
    //search for city
    const foundorderMenuItem = await getorderMenuItemService(id);
    if (foundorderMenuItem == undefined) 
        return c.text("orderMenuItem not found!👽", 404);
    //get the data and update
    const res = await updateorderMenuItemService(id, orderMenuItem);
    //return the updated city
    if (!res ) 
        return c.text("orderMenuItem not updated!👽", 404); 
    return c.json({msg: res}, 201);

} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//delete city
export const deleteorderMenuItem = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    try{
        const orderMenuItem = await getorderMenuItemService(id);
    if (orderMenuItem == undefined)
        return c.text("orderMenuItem not found!👽", 404);
    
    const res = await deleteorderMenuItemService(id);
    if (!res) return c.text("orderMenuItem not deleted!👽", 404);

    return c.json({msg: res}, 201);

    }catch(error: any){
        return c.json({error: error?.message}, 400)
    }
    
}