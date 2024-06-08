import { Context } from "hono";
import { categoryService, getCategoryService, createCategoryService, updateCategoryService, deleteCategoryService } from "./category.service";

export const listCategory = async (c: Context) => {
    const data = await categoryService();
    if (data == null) {
        return c.text("no Category found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

//get single city
export const getSingleCategory= async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const category = await getCategoryService(id);
    if (category == undefined){
        return c.text("restaurant not found!👽", 404);
    }
    return c.json(category, 200);
}

//create restaurant
export const createCategory = async (c: Context) => {
  try{
    const category = await c.req.json();
    const createdCategory = await createCategoryService(category);
   if (!createdCategory){
    return c.text("Category not created!👽", 404)
   }
    return c.json({msg: createdCategory}, 201);
} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//update city
export const updateCategory = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const category = await c.req.json();
    try{
    //search for city
    const foundCategory = await getCategoryService(id);
    if (foundCategory == undefined) 
        return c.text("Category not found!👽", 404);
    //get the data and update
    const res = await updateCategoryService(id, category);
    //return the updated city
    if (!res ) 
        return c.text("Category not updated!👽", 404); 
    return c.json({msg: res}, 201);

} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//delete city
export const deleteCategory = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    try{
        const category = await getCategoryService(id);
    if (category == undefined)
        return c.text("city not found!👽", 404);
    
    const res = await deleteCategoryService(id);
    if (!res) return c.text("restaurant not deleted!👽", 404);

    return c.json({msg: res}, 201);

    }catch(error: any){
        return c.json({error: error?.message}, 400)
    }
    
}