import { Context } from "hono";
import { stateService, getStateService, createStateService, updateStateService, deleteStateService  } from "./state.service";

export const listState = async (c: Context) => {
    try{
    const data = await stateService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
    }catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const getSingleState = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const user = await getStateService(id);
    if (user == undefined){
        return c.text("user not found!👽", 404);
    }
    return c.json(user, 200);
} 

export const createState = async (c: Context) => {
    try{
      const user = await c.req.json();
      const createdState = await createStateService(user);
     if (!createdState){
      return c.text("user not created!👽", 404)
     }
      return c.json({msg: createdState}, 201);
  } catch (error: any){
      return c.json({error: error?.message}, 400)
  }
  }

  export const updateState = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const user = await c.req.json();
    try{
    //search for state
    const foundState = await getStateService(id);
    if (foundState == undefined) 
        return c.text("user not found!👽", 404);
    //get the data and update
    const res = await updateStateService(id, user);
    //return the updated user
    if (!res )  
        return c.text("user not updated!👽", 404); 
    return c.json({msg: res}, 201);

} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}
  
//delete user
export const deleteState =  async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    try{

   //search for the user
   const user = await getStateService(id);
   if (user == undefined) 
       return c.text("user not found!👽", 404);
    //delete the user
    const res = await deleteStateService(id);
    if (!res) return c.text("user not deleted!👽", 404);

    return c.json({msg: res}, 201);

    }catch(error: any){
        return c.json({error: error?.message}, 400)
    }
}
