import {TSUsers, usersTable, TIUsers } from '../../drizzle/schema'
import db from '../../drizzle/db'
import { eq} from "drizzle-orm";

export const getUsersWithcommentService = async (): Promise<TSUsers[] | null> => {
  return await db.query.usersTable.findMany({
      with: {
         comment : {
          columns: {
            comment_text: true
          }
         }
      }
  })
}
export const getUsersWithAddressService = async (): Promise<TSUsers[] | null> => {
  return await db.query.usersTable.findMany({
      with: {
         address :{
          columns: {
            zip_code: true,
            delivery_instructions: true
          }
         }
      }
  })
}
export const getUsersWithOrdersService = async (): Promise<TSUsers[] | null> => {
  return await db.query.usersTable.findMany({
      with: {
         orders : {
          columns: {
            final_price: true
          }
         }
      }
  })
}

export const getDriversWithUserService = async (): Promise<TSUsers[] | null> => {
  return await db.query.usersTable.findMany({
      with: {
        driver : {
          columns: {
            car_make: true,
            car_model: true,
            car_year: true,
            delivering: true

          }
         }
      }
  })
}

export const getsingleUsersWithDriverService = async (id: number): Promise<TIUsers | undefined> => {
  return await db.query.usersTable.findFirst({
      where: eq(usersTable.id, id),
      with: {
        driver : {
         columns: {
          car_make: true,
          car_model: true,
          car_year: true,
          delivering: true
         }
        }
      }
  })
}
