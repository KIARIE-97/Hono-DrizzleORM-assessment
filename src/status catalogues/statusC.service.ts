import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import {TIStatusCatalog, TSStatusCatalog, status_catalogTable} from "../drizzle/schema";

export const statusCatalogService = async (): Promise<TSStatusCatalog[] | null> => {
    return await db.query.status_catalogTable.findMany()
}

//get one restaurant
export const getstatusCatalogService = async (id: number): Promise<TIStatusCatalog | undefined> => {
    return await db.query.status_catalogTable.findFirst({
        where: eq(status_catalogTable.id, id) 
    })
}

//create restaurant
export const createstatusCatalogService = async (statusCatalog: TIStatusCatalog): Promise<TIStatusCatalog> => {
    await db.insert(status_catalogTable).values(statusCatalog)
    return statusCatalog;

}
//update restaurant
export const updatestatusCatalogService = async (id: number, statusCatalog: TIStatusCatalog): Promise<TIStatusCatalog> => {

    await db.update(status_catalogTable).set(statusCatalog).where(eq(status_catalogTable.id, id))
    return statusCatalog;
}
//.delete restaurant
export const deletestatusCatalogService = async (id: number) => {
    await db.delete(status_catalogTable).where(eq(status_catalogTable.id, id))
    return "user deleted successfully!😑"
}