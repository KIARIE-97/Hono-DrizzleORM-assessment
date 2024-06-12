import {TSDriver, usersTable, ordersTable, driverTable } from '../../drizzle/schema'
import db from '../../drizzle/db'


export const getdriversWithUserService = async (): Promise<TSDriver[] | null> => {
  return await db.query.driverTable.findMany({
      with: {
         user : {
          columns: {
            name: true,
            contact_phone: true
          }
         }
      }
  })
}

export const getdriversWithOrdersService = async (): Promise<TSDriver[] | null> => {
  return await db.query.driverTable.findMany({
      with: {
         orders : {
          columns: {
            price: true
          }
         }
      }
  })
}
