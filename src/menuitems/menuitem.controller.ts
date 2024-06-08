import { Context } from "hono";
import { menuService, getMenuService, createMenuService, updateMenuService, deleteMenuService } from "./menuitem.service";

export const listMenu = async (c: Context) => {
    const data = await menuService();
    if (data == null) {
        return c.text("no menuItem found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

//get single menu
export const getSinglemenuItem= async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const menuItem = await getMenuService(id);
    if (menuItem == undefined){
        return c.text("menuItem not found!👽", 404);
    }
    return c.json(menuItem, 200);
}

//create restaurant
export const createmenuItem = async (c: Context) => {
  try{
    const menuItem = await c.req.json();
    const createdmenuItem = await createMenuService(menuItem);
   if (!createdmenuItem){
    return c.text("menuItem not created!👽", 404)
   }
    return c.json({msg: createdmenuItem}, 201);
} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//update menuItem
export const updatemenuItem = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const menuItem = await c.req.json();
    try{
    //search for city
    const foundmenuItem = await getMenuService(id);
    if (foundmenuItem == undefined) 
        return c.text("menuItem not found!👽", 404);
    //get the data and update
    const res = await updateMenuService(id, menuItem);
    //return the updated city
    if (!res ) 
        return c.text("menuItem not updated!👽", 404); 
    return c.json({msg: res}, 201);

} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//delete city
export const deletemenuItem = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    try{
        const menuItem = await getMenuService(id);
    if (menuItem == undefined)
        return c.text("menuItem not found!👽", 404);
    
    const res = await deleteMenuService(id);
    if (!res) return c.text("menuItem not deleted!👽", 404);

    return c.json({msg: res}, 201);

    }catch(error: any){
        return c.json({error: error?.message}, 400)
    }
    
}