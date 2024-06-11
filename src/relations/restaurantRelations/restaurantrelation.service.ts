import {TSRestaurant, restaurantTable, usersTable, commentTable, addressTable, ordersTable, driverTable } from '../../drizzle/schema'
import db from '../../drizzle/db'


export const getrestaurantWithcityService = async (): Promise<TSRestaurant[] | null> => {
  return await db.query.restaurantTable.findMany({
      with: {
         city : {
          columns: {
            stateId: true
          }
         }
      }
  })
}
export const getrestaurantWithmenuitemsService = async (): Promise<TSRestaurant[] | null> => {
  return await db.query.restaurantTable.findMany({
      with: {
         menu_item :{
          columns: {
            description: true,
            ingredients: true
          }
         }
      }
  })
}
export const getrestaurantWithOrdersService = async (): Promise<TSRestaurant[] | null> => {
  return await db.query.restaurantTable.findMany({
      with: {
         orders : {
          columns: {
            final_price: true
          }
         }
      }
  })
}
