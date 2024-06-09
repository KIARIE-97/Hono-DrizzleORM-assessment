"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const drizzle_kit_1 = require("drizzle-kit");
exports.default = (0, drizzle_kit_1.defineConfig)({
    // Your configuration here
    dialect: "postgresql",
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migrations",
    dbCredentials: {
        url: process.env.Database_URL,
    },
    verbose: true,
    strict: true,
});
