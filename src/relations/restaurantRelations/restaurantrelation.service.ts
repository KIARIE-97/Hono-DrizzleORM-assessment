import {TSRestaurant, simpleRestaurant, restaurantTable, usersTable, commentTable, addressTable, ordersTable, driverTable } from '../../drizzle/schema'
import db from '../../drizzle/db'


export const getrestaurantWithcityService = async (): Promise<simpleRestaurant[] | null> => {
  return await db.query.restaurantTable.findMany({
    columns:{
      name: true,
    },
      with: {
         city : {
          columns: {
            stateId: true
          }
         }
      }
  })
}
export const getrestaurantWithmenuitemsService = async (): Promise<simpleRestaurant[] | null> => {
  return await db.query.restaurantTable.findMany({
    columns:{
      name: true,
    },
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
export const getrestaurantWithOrdersService = async (): Promise<simpleRestaurant[] | null> => {
  return await db.query.restaurantTable.findMany({
    columns:{
      name: true,
    },
      with: {
         orders : {
          columns: {
            final_price: true
          }
         }
      }
  })
}
