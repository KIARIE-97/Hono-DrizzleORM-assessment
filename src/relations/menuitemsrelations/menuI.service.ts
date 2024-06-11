import {TSMenuItem, usersTable, menu_itemTable, addressTable, ordersTable, driverTable } from '../../drizzle/schema'
import db from '../../drizzle/db'
import { Column, sql } from "drizzle-orm";

export const getmenuWithrestaurantService = async (): Promise<TSMenuItem[] | null> => {
  return await db.query.menu_itemTable.findMany({
      with: {
         restaurant : {
          columns: {
            name: true
          }
         }
      }
  })
}
export const getmenuWithcategoryService = async (): Promise<TSMenuItem[] | null> => {
  return await db.query.menu_itemTable.findMany({
      with: {
         category :{
          columns: {
            name: true
          }
         }
      }
  })
}
export const getmenuWithOrdersService = async (): Promise<TSMenuItem[] | null> => {
  return await db.query.menu_itemTable.findMany({
      with: {
         order_menu_item : {
          columns: {
            quantity: true,
            price: true
          }
         }
      }
  })
}
