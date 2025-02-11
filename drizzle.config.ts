import { defineConfig } from 'drizzle-kit';
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({
	dialect: 'postgresql',
	schema: './src/lib/server/db/schema.ts',
	verbose: true,
	strict: true,
	out: './supabase/migrations',
	dbCredentials: {
		// url: process.env.DATABASE_URL,
		host: 'localhost',
		port: 54321,
		user: 'postgres',
		password: 'postgres',
		database: 'supabase'
	},
});
