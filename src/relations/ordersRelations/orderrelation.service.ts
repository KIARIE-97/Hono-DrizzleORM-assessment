import {TSOrders, ordersTable, commentTable, addressTable, usersTable, driverTable } from '../../drizzle/schema'
import db from '../../drizzle/db'
import { Column, sql } from "drizzle-orm";

export const getOrdersWithcommentService = async (): Promise<TSOrders[] | null> => {
  return await db.query.ordersTable.findMany({
      with: {
         comments : {
          columns: {
            comment_text: true
          }
         }
      }
  })
}
export const getOrderssWithAddressService = async (): Promise<TSOrders[] | null> => {
  return await db.query.ordersTable.findMany({
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
export const getOrdersWithRestaurantService = async (): Promise<TSOrders[] | null> => {
  return await db.query.ordersTable.findMany({
      with: {
         restaurant: {
          columns: {
            name: true
          }
         }
      }
  })
}