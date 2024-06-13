
import {TSState, TIState, SimpleCity, stateTable} from '../../drizzle/schema'
import db from '../../drizzle/db'
import { eq } from "drizzle-orm";
import { Column, sql } from "drizzle-orm";

export const getstateWithcityService = async (): Promise<TSState[] | null> => {
  return await db.query.stateTable.findMany({
      with: {
         city : {
          columns: {
            name: true
          }
         }
      }
  })
}

export const getsinglestateWithcityService = async (id: number): Promise<SimpleCity | undefined> => {
  return await db.query.stateTable.findFirst({
    columns:{
      name: true
    },
      where: eq(stateTable.id, id),
      with: {
        city : {
         columns: {
           name: true
         }
        }
      }
  })
}

