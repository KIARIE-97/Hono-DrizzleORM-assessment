import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import {TIComment, TSComment, commentTable} from "../drizzle/schema";

export const commentService = async (): Promise<TSComment[] | null> => {
    return await db.query.commentTable.findMany()
}

//get one restaurant
export const getCommentService = async (id: number): Promise<TIComment | undefined> => {
    return await db.query.commentTable.findFirst({
        where: eq(commentTable.id, id) 
    })
}

//create restaurant
export const createCommentService = async (comment: TIComment): Promise<TIComment> => {
    await db.insert(commentTable).values(comment)
    return comment;

}
//update restaurant
export const updateCommentService = async (id: number, comment: TIComment): Promise<TIComment> => {

    await db.update(commentTable).set(comment).where(eq(commentTable.id, id))
    return comment;
}
//.delete restaurant
export const deleteCommentService = async (id: number) => {
    await db.delete(commentTable).where(eq(commentTable.id, id))
    return "Comment deleted successfully!😑"
}