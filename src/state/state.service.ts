
import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import {TIState, TSState, stateTable} from "../drizzle/schema";

//get all states
export const stateService = async (): Promise<TSState[] | null> => {
    return await db.query.stateTable.findMany()
}
//get one state
export const getStateService = async (id: number): Promise<TIState | undefined> => {
    return await db.query.stateTable.findFirst({
        where: eq(stateTable.id, id) 
    })
}

//create state
export const createStateService = async (user: TIState): Promise<TIState> => {
    await db.insert(stateTable).values(user)
    return user;

}

//update state
export const updateStateService = async (id: number, user: TIState): Promise<TIState> => {

    await db.update(stateTable).set(user).where(eq(stateTable.id, id))
    return user;
}

//delete state
export const deleteStateService = async (id: number) => {
    await db.delete(stateTable).where(eq(stateTable.id, id))
    return "user deleted successfully!😑"
}