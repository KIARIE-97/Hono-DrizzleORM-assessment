import "dotenv/config";
import {defineConfig} from "drizzle-kit";

export default defineConfig({
  // Your configuration here
  dialect: "postgresql",
  schema:"./src/drizzle/schema.ts",
  out:"./src/drizzle/migrations",
  dbCredentials: {
    url: process.env.Database_URL!,
  },
  verbose: true,
  strict: true,

});