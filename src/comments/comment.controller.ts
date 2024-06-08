import { Context } from "hono";
import { commentService, getCommentService, createCommentService, updateCommentService, deleteCommentService } from "./comment.service";

export const listComment = async (c: Context) => {
    const data = await commentService();
    if (data == null) {
        return c.text("no Comment found!😶‍🌫️👽", 404)
    } 
    return c.json(data, 200);
}

//get single city
export const getSingleComment= async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const comment = await getCommentService(id);
    if (comment == undefined){
        return c.text("Comment not found!👽", 404);
    }
    return c.json(comment, 200);
}

//create restaurant
export const createComment = async (c: Context) => {
  try{
    const comment = await c.req.json();
    const createdComment = await createCommentService(comment);
   if (!createdComment){
    return c.text("comment not created!👽", 404)
   }
    return c.json({msg: createdComment}, 201);
} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//update city
export const updateComment= async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    const comment = await c.req.json();
    try{
    //search for city
    const foundComment= await getCommentService(id);
    if (foundComment == undefined) 
        return c.text("Comment not found!👽", 404);
    //get the data and update
    const res = await updateCommentService(id, comment);
    //return the updated city
    if (!res ) 
        return c.text("Comment not updated!👽", 404); 
    return c.json({msg: res}, 201);

} catch (error: any){
    return c.json({error: error?.message}, 400)
}
}

//delete city
export const deleteComment = async (c: Context) => {
    const id = Number(c.req.param("id"));
    if (isNaN(id)) 
        return c.text("invalid ID!", 400);

    try{
        const comment = await getCommentService(id);
    if (comment == undefined)
        return c.text("comment not found!👽", 404);
    
    const res = await deleteCommentService(id);
    if (!res) return c.text("Comment not deleted!👽", 404);

    return c.json({msg: res}, 201);

    }catch(error: any){
        return c.json({error: error?.message}, 400)
    }
    
}