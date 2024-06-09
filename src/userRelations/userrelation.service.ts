// userRelation.service.ts
import { eq } from "drizzle-orm";
import db from "../drizzle/db"; // Adjust the import based on your actual database initialization

import { 
  TSUserRelations,
  usersTable, 
  commentTable, 
  addressTable, 
  ordersTable, 
  driverTable, 
  restaurant_ownerTable // Note: Changed to restaurantOwnerTable to match the type definitions
} from "../drizzle/schema";

// Get all users with their related data
export const getUsersWithRelations = async (): Promise<(typeof usersTable.$inferSelect & TSUserRelations)[] | null> => {

  const users = await db
    .select()
    .from(usersTable)
    .leftJoin(commentTable, eq(commentTable.userId, usersTable.id))
    .leftJoin(addressTable, eq(addressTable.userId, usersTable.id))
    .leftJoin(ordersTable, eq(ordersTable.userId, usersTable.id))
    .leftJoin(driverTable, eq(driverTable.userId, usersTable.id))
    .leftJoin(restaurant_ownerTable, eq(restaurant_ownerTable.ownerId, usersTable.id))
    .execute();

  const usersWithRelations = users.reduce((acc: any, user: any) => {
    const userId = user.usersTable?.id; // Safely access id
    if (!userId) return acc; // Skip if userId is undefined
   
    if (!acc[userId]) {
      acc[userId] = {
        ...user.usersTable,
        comments: [],
        addresses: [],
        orders: [],
        drivers: [],
        restaurantOwners: []
      };
    }

    if (user.commentTable) {
      acc[userId].comments.push(user.commentTable);
    }
    if (user.addressTable) {
      acc[userId].addresses.push(user.addressTable);
    }
    if (user.ordersTable) {
      acc[userId].orders.push(user.ordersTable);
    }
    if (user.driverTable) {
      acc[userId].drivers.push(user.driverTable);
    }
    if (user.restaurantOwnerTable) {
      acc[userId].restaurantOwners.push(user.restaurantOwnerTable);
    }

    return acc;
  }, {});

  return Object.values(usersWithRelations);
};
