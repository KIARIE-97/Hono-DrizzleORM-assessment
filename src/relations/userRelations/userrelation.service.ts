import {TSUsers, usersTable, commentTable, addressTable, ordersTable, driverTable } from '../../drizzle/schema'
import db from '../../drizzle/db'
import { Column, sql } from "drizzle-orm";

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
