import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, openAPI } from "better-auth/plugins"
import { db } from "../database";
import * as schema from "../database/schemas/auth.schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    usePlural: true,
    schema: {
      ...schema,
    }
  }),
  emailAndPassword: {
    enabled: true
  },
  plugins: [
    openAPI(), admin()
  ]
})