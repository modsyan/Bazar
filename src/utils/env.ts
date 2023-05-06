import { config } from "dotenv";
import { exit } from "process";
import { LOGGER } from "./logger";

config({
  path: "./config.env",
});
export function getDbConnectionString(): string {
  const currentEnvironment = process.env.NODE_ENV;

  let databaseUrl: string | undefined;
  let databasePassword: string | undefined;

  switch (currentEnvironment) {
    case "DEVELOPMENT":
      databaseUrl = process.env.DATABASE_REMOTE_DEVELOPMENT;
      databasePassword = process.env.DATABASE_PASSWORD_DEVELOPMENT;
      break;

    case "PRODUCTION":
      databaseUrl = process.env.DATABASE_PASSWORD_PRODUCTION;
      databasePassword = process.env.DATABASE_PASSWORD_PRODUCTION;
      break;

    default:
      LOGGER.error("Invalid or missing NODE_ENV value");
      exit(1);
  }

  if(!databaseUrl || !databasePassword) {
      LOGGER.error("Missing Database Connection String or Password");
      exit(1);
  }

  return databaseUrl?.replace("<PASSWORD>", databasePassword);
}
