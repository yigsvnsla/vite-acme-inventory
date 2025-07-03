import { type Config, defineConfig } from "drizzle-kit";

export default defineConfig(<Config>{
	out: "./drizzle",
	schema: "./app/database/schemas/*",
	dialect: "sqlite",
	dbCredentials: {
		url: import.meta.env.VITE_DB_FILE_PATH!,
	},
});
