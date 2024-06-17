import {TIAuthOnUser, TIUsers, TSAuthOnUser, usersTable, AuthOnUsersTable} from '../../drizzle/schema'
import db from '../../drizzle/db'
import { sql } from "drizzle-orm";

// export const createAuthUserService = async (user: TIAuthOnUser): Promise<string | null> => {

//     await db.insert(AuthOnUsersTable).values(user)
//     return"user created successfully"
// }

export const createAuthUserService = async (user: TIAuthOnUser): Promise<string | null> => {
    try {
      // Insert user into `users` table
      const createdUser = await db.insert(usersTable).values({}).returning();
  
      // Extract the created user ID
      const userId = createdUser[0].id;
  
      // Insert user into `auth_user` table
      await db.insert(AuthOnUsersTable).values({
        userId,
        password: user.password,
        username: user.username,
        role: user.role || 'user'
      });
  
      return createdUser[0]; // Return the created user
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('User creation failed');
    }
  };

export  const userLoginService =  async (user: TSAuthOnUser) => {
    const {username, password} = user;
    return await db.query.AuthOnUsersTable.findFirst({
        columns :{
            username: true,
            role: true,
            password: true
        }, where : sql `${AuthOnUsersTable.username} = ${username}`,
        with: {
            user: {
                columns: {
                    name: true,
                    contact_phone: true,
                    email: true
                }
            }
        }
    })
}

