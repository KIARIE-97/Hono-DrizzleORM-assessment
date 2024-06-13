import {TSUsers, usersTable,simpleUsers, TIUsers } from '../../drizzle/schema'
import db from '../../drizzle/db'
import { eq} from "drizzle-orm";

export const getUsersWithcommentService = async (): Promise<simpleUsers[] | null> => {
  return await db.query.usersTable.findMany({
    columns: {
      name: true,
      contact_phone: true,
      email: true
    },
      with: {
         comment : {
          columns: {
            comment_text: true
          }
         }
      }
  })
}
export const getUsersWithAddressService = async (): Promise<simpleUsers[] | null> => {
  return await db.query.usersTable.findMany({
    columns: {
      name: true,
      contact_phone: true,
      email: true
    },
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
export const getUsersWithOrdersService = async (): Promise<simpleUsers[] | null> => {
  return await db.query.usersTable.findMany({
    columns: {
      name: true,
      contact_phone: true,
      email: true
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

export const getDriversWithUserService = async (): Promise<simpleUsers[] | null> => {
  return await db.query.usersTable.findMany({
    columns: {
      name: true,
      contact_phone: true,
      email: true
    },
      with: {
        driver : {
          columns: {
            car_make: true,
            delivering: true

          }
         }
      }
  })
}

export const getsingleUsersWithDriverService = async (id: number): Promise<TIUsers | undefined> => {
  return await db.query.usersTable.findFirst({
    columns: {
      name: true,
      contact_phone: true,
      email: true
    },
      where: eq(usersTable.id, id),
      with: {
        driver : {
         columns: {
          delivering: true
         }
        }
      }
  })
}
