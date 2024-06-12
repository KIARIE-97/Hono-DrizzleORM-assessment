import "dotenv/config";
import {drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

import { Client } from "pg";

const databaseUrl = process.env.Database_URL as string;

 export const  client = neon(databaseUrl);
const db = drizzle(client, { schema, logger: true });
export default db;


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