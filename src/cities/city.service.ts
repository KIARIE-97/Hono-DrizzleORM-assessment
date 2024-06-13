import { eq } from "drizzle-orm";
import db from "../drizzle/db"
import {TICity, TSCity, SimpleCity, cityTable} from "../drizzle/schema";

export const cityService = async (): Promise<TSCity[] | null> => {
    return await db.query.cityTable.findMany()
}

//get one city
export const getCityService = async (id: number): Promise<TICity | undefined> => {
    return await db.query.cityTable.findFirst({
        where: eq(cityTable.id, id) 
    })
}

export const getcityWithallServices = async (): Promise<SimpleCity[] | null> => {
    return await db.query.cityTable.findMany({
      columns: {
        name: true
      },
        with: {
           state : {
            columns: {
              name: true
            }
           },
              restaurant : {
                columns: {
                  name: true
                }
              },
                address : {
                    columns: {
                    zip_code: true
                    }
                }
        }
    })
  }

//create city
export const createCityService = async (city: TICity): Promise<TICity> => {
    await db.insert(cityTable).values(city)
    return city;

}
//update city
export const updateCityService = async (id: number, city: TICity): Promise<TICity> => {

    await db.update(cityTable).set(city).where(eq(cityTable.id, id))
    return city;
}
//delete city
export const deleteCityService = async (id: number) => {
    await db.delete(cityTable).where(eq(cityTable.id, id))
    return "user deleted successfully!😑"
}