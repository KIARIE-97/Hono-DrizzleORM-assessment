"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const migrator_1 = require("drizzle-orm/neon-http/migrator");
require("dotenv/config");
const db_1 = __importDefault(require("./db"));
// import { NeonHttpDatabase } from "drizzle-orm/neon-http";
async function migration() {
    try {
        console.log("======Migration Started ======");
        await (0, migrator_1.migrate)(db_1.default, { migrationsFolder: __dirname + "/migrations" });
        console.log("======Migration Ended======");
        process.exit(0);
    }
    catch (error) {
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
