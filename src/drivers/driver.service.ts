import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import {TIDriver, TSDriver,simpleDriver, driverTable} from "../drizzle/schema";

//select all driver
export const driverService = async (): Promise<simpleDriver[] | null> => {
    return await db.query.driverTable.findMany({
        columns:{
            car_make: true,
            online: true,
            delivering: true
        }
    })
}

//select one driver
export const getDriverService = async (id: number): Promise<TIDriver | undefined> => {
    return await db.query.driverTable.findFirst({
        where: eq(driverTable.id, id) 
    })
}

//create driver
export const createDriverService = async (driver: TIDriver): Promise<TIDriver> => {
    await db.insert(driverTable).values(driver)
    return driver;

}
//update user
export const updateDriverService = async (id: number, driver: TIDriver): Promise<TIDriver> => {

    await db.update(driverTable).set(driver).where(eq(driverTable.id, id))
    return driver;
}
//delete user
export const deleteDriverService = async (id: number) => {
    await db.delete(driverTable).where(eq(driverTable.id, id))
    return "user deleted successfully!😑"
}

//
export const specifiedDriverService = async (limit?:number):Promise<TSDriver[] | null> =>{
    if(limit){
 
        return await db.query.driverTable.findMany({
            limit: limit
        });
    }
    return await db.query.driverTable.findMany();
 
}
 
//limit
export const limitdriver= async (limit: number) => {
    return await db.select().from(driverTable).limit(limit);
  };