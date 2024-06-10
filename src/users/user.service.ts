import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import {TIUsers, TSUsers, usersTable} from "../drizzle/schema";

export const userService = async (): Promise<TSUsers[] | null> => {
    return await db.query.usersTable.findMany()
}

//get one user
export const getUserService = async (id: number): Promise<TIUsers | undefined> => {
    return await db.query.usersTable.findFirst({
        where: eq(usersTable.id, id) 
    })
}

//create user
export const createUserService = async (user: TIUsers): Promise<TIUsers> => {
    await db.insert(usersTable).values(user)
    return user;
 
}

//update user
export const updateUserService = async (id: number, user: TIUsers): Promise<TIUsers> => {

    await db.update(usersTable).set(user).where(eq(usersTable.id, id))
    return user;
}
//delete user
export const deleteUserService = async (id: number) => {
    await db.delete(usersTable).where(eq(usersTable.id, id))
    return "user deleted successfully!😑"
}