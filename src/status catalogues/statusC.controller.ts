import { Context } from "hono";
import { statusCatalogService, getstatusCatalogService, createstatusCatalogService, updatestatusCatalogService, deletestatusCatalogService } from "./statusC.service";

export const liststatusCatalog = async (c: Context) => {
    const data = await statusCatalogService();
    if (data == null) {
        return c.text("no statusCatalog found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

//get single city
export const getSinglestatusCatalog= async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const statusCatalog = await getstatusCatalogService(id);
    if (statusCatalog == undefined){
        return c.text("statusCatalog not found!👽", 404);
    }
    return c.json(statusCatalog, 200);
}

//create restaurant
export const createstatusCatalog = async (c: Context) => {
  try{
    const statusCatalog = await c.req.json();
    const createdstatusCatalog = await createstatusCatalogService(statusCatalog);
   if (!createdstatusCatalog){
    return c.text("restaurant not created!👽", 404)
   }
    return c.json({msg: createdstatusCatalog}, 201);
} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//update city
export const updatestatusCatalog = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const statusCatalog = await c.req.json();
    try{
    //search for city
    const foundstatusCatalog= await getstatusCatalogService(id);
    if (foundstatusCatalog == undefined) 
        return c.text("statusCatalog not found!👽", 404);
    //get the data and update
    const res = await updatestatusCatalogService(id, statusCatalog);
    //return the updated city
    if (!res ) 
        return c.text("statusCatalog not updated!👽", 404); 
    return c.json({msg: res}, 201);

} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//delete city
export const deletestatusCatalog = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    try{
        const statusCatalog = await getstatusCatalogService(id);
    if (statusCatalog == undefined)
        return c.text("statusCatalog not found!👽", 404);
    
    const res = await deletestatusCatalogService(id);
    if (!res) return c.text("statusCatalog not deleted!👽", 404);

    return c.json({msg: res}, 201);

    }catch(error: any){
        return c.json({error: error?.message}, 400)
    }
    
}