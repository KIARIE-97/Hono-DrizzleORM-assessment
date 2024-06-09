import "dotenv/config";
import {drizzle } from "drizzle-orm/node-postgres";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

import { Client } from "pg";

const databaseUrl = process.env.DATABASE_URL as string;

 const sql = neon(databaseUrl);
 export const db = drizzle(sql, { schema, logger: true });


//  config({ path: ".env" });

//  export const client = new Client({
//     connectionString: process.env.Database_URL as string,
//  });

//  const main = async () => {
//     await client.connect();
//  }
//  main();


//  const db = drizzle(client, {schema, logger: true});// create a drizzle instance

//  export default db; // This is the default export of the file