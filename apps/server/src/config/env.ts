import { z } from "zod";
import dotenv from "dotenv";

//Notes at bottom

// Load environment variables from .env file
dotenv.config();

// Define the schema for environment variables
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z.string().default("8000").transform(Number),
  DATABASE_URL: z.string().url(),
});

// Validate and parse environment variables
type Env = z.infer<typeof envSchema>;

let env: Env;

try {
  env = envSchema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error("Invalid environment variables:", error);
    process.exit(1);
  }
  throw error;
}

export { env };

//here we validate .env for type safety,
//how dotenv works
//in node.js process.env is a object provided by node.js, it holds env variables as string in process Object
// dotenv.config() reads a .env file, parses it, and assigns values to process.env.

//
