import { Context } from "hono";
import { userService, getUserService, createUserService, updateUserService, deleteUserService } from "./user.service";

export const listUsers = async (c: Context) => {
    const data = await userService();
    if (data == null) {
        return c.text("no user found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

//get single user
export const getSingleUser = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const user = await getUserService(id);
    if (user == undefined){
        return c.text("user not found!👽", 404);
    }
    return c.json(user, 200);
} 

//create user
export const createUser = async (c: Context) => {
  try{
    const user = await c.req.json();
    const createdUser = await createUserService(user);
   if (!createdUser){
    return c.text("user not created!👽", 404)
   }
    return c.json({msg: createdUser}, 201);
} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//update user
export const updateUser = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const user = await c.req.json();
    try{
    //search for user
    const founduser = await getUserService(id);
    if (founduser == undefined) 
        return c.text("user not found!👽", 404);
    //get the data and update
    const res = await updateUserService(id, user);
    //return the updated user
    if (!res ) 
        return c.text("user not updated!👽", 404); 
    return c.json({msg: res}, 201);

} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//delete user
export const deleteUser =  async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    try{

   //search for the user
   const user = await getUserService(id);
   if (user == undefined) 
       return c.text("user not found!👽", 404);
    //delete the user
    const res = await deleteUserService(id);
    if (!res) return c.text("user not deleted!👽", 404);

    return c.json({msg: res}, 201);

    }catch(error: any){
        return c.json({error: error?.message}, 400)
    }
}
