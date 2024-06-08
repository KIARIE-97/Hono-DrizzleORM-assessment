import { Context } from "hono";
import { orderStatusService, getOrderStatusService, createStatusOrderService, updateOrderStatusService, deleteOrderStatusService } from "./orderS.service";

export const listorderStatus = async (c: Context) => {
    const data = await orderStatusService();
    if (data == null) {
        return c.text("no orderStatus found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

//get single city
export const getSingleorderStatus= async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const orderStatus = await getOrderStatusService(id);
    if (orderStatus == undefined){
        return c.text("orderStatus not found!👽", 404);
    }
    return c.json(orderStatus, 200);
}

//create restaurant
export const createorderStatus= async (c: Context) => {
  try{
    const orderStatus = await c.req.json();
    const createdorderStatus = await createStatusOrderService(orderStatus);
   if (!createdorderStatus){
    return c.text("orderStatus not created!👽", 404)
   }
    return c.json({msg: createdorderStatus}, 201);
} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//update city
export const updateorderStatus = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const orderStatus = await c.req.json();
    try{
    //search for city
    const foundorderStatus = await getOrderStatusService(id);
    if (foundorderStatus == undefined) 
        return c.text("orderStatus not found!👽", 404);
    //get the data and update
    const res = await updateOrderStatusService(id, orderStatus);
    //return the updated city
    if (!res ) 
        return c.text("orderStatus not updated!👽", 404); 
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
        const orderStatus = await getOrderStatusService(id);
    if (orderStatus == undefined)
        return c.text("orderStatus not found!👽", 404);
    
    const res = await deleteOrderStatusService(id);
    if (!res) return c.text("orderStatus not deleted!👽", 404);

    return c.json({msg: res}, 201);

    }catch(error: any){
        return c.json({error: error?.message}, 400)
    }
    
}