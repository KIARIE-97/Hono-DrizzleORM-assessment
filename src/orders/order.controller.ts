import { Context } from "hono";
import { ordersService, getOrdersService, createOrdersService, updateOrdersService, deleteOrdersService } from "./order.service";

export const listOrders = async (c: Context) => {
    const data = await ordersService();
    if (data == null) {
        return c.text("no orders found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

//get single city
export const getSingleOrders= async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const orders = await getOrdersService(id);
    if (orders == undefined){
        return c.text("orders not found!👽", 404);
    }
    return c.json(orders, 200);
}

//create restaurant
export const createOrders = async (c: Context) => {
  try{
    const orders = await c.req.json();
    const createdOrders = await createOrdersService(orders);
   if (!createdOrders){
    return c.text("orders not created!👽", 404)
   }
    return c.json({msg: createdOrders}, 201);
} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//update city
export const updateOrders = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const orders = await c.req.json();
    try{
    //search for city
    const foundOrders = await getOrdersService(id);
    if (foundOrders == undefined) 
        return c.text("orders not found!👽", 404);
    //get the data and update
    const res = await updateOrdersService(id, orders);
    //return the updated city
    if (!res ) 
        return c.text("orders not updated!👽", 404); 
    return c.json({msg: res}, 201);

} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//delete city
export const deleteOrders = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    try{
        const orders = await getOrdersService(id);
    if (orders == undefined)
        return c.text("orders not found!👽", 404);
    
    const res = await deleteOrdersService(id);
    if (!res) return c.text("orders not deleted!👽", 404);

    return c.json({msg: res}, 201);

    }catch(error: any){
        return c.json({error: error?.message}, 400)
    }
    
}