import { migrate } from "drizzle-orm/neon-http/migrator";
import "dotenv/config";

import db from "./db";

// import { NeonHttpDatabase } from "drizzle-orm/neon-http";

async function migration() {
  try {
    console.log("======Migration Started ======");
    await migrate(db, { migrationsFolder: __dirname + "/migrations" });
    console.log("======Migration Ended======");
    process.exit(0);
  } catch (error) {
    console.error("Migration failed with error: ", error);
    process.exit(1);
  }
}

migration().catch((e) => {
  console.error("Unexpected error during migration:", e);
  process.exit(1);
});

// async function migration() {

//     await migrate (db, {migrationsFolder : __dirname + "/migrations"})
//     await client.end();
// }

// migration().catch((err) => {
//      console.error(err)
//      process.exit(0);
// })