import { defineConfig } from "drizzle-kit";

export default defineConfig({
  driver: "turso",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN!,
  },
  out: "./drizzle/migrations",
  schema: "./src/server/db/schemas/index.ts",
});
