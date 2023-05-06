import { config } from "dotenv";
import { exit } from "process";
import { LOGGER } from "./logger";

config({
  path: "./config.env",
});

enum Environment {
  Development = "DEVELOPMENT",
  Production = "PRODUCTION",
}

enum DatabaseEnv {
  Development = "DATABASE_REMOTE_DEVELOPMENT",
  Production = "DATABASE_REMOTE_PRODUCTION",
}

enum PasswordEnv {
  Development = "DATABASE_PASSWORD_DEVELOPMENT",
  Production = "DATABASE_PASSWORD_PRODUCTION",
}

export enum EnvType {
  EnvironmentDevelopment = "DEVELOPMENT",
  EnvironmentProduction = "PRODUCTION",
  DatabaseRemoteDevelopment = "DATABASE_REMOTE_DEVELOPMENT",
  DatabaseRemoteProduction = "DATABASE_REMOTE_PRODUCTION",
  DatabasePasswordDevelopment = "DATABASE_PASSWORD_DEVELOPMENT",
  DatabasePasswordProduction = "DATABASE_PASSWORD_PRODUCTION",
}

export function getDbConnectionString(): string {
  const currentEnvironment = process.env.NODE_ENV;

  let databaseUrl: string | undefined;
  let databasePassword: string | undefined;

  switch (currentEnvironment) {
    case Environment.Development:
      databaseUrl = DatabaseEnv.Development;
      databasePassword = process.env.DATABASE_PASSWORD_DEVELOPMENT;
      break;

    case Environment.Production:
      databaseUrl = process.env.DATABASE_PASSWORD_PRODUCTION;
      databasePassword = process.env.DATABASE_PASSWORD_PRODUCTION;
      break;

    default:
      LOGGER.error("Invalid or missing NODE_ENV value");
      exit(1);
  }

  if (!databaseUrl || !databasePassword) {
    LOGGER.error("Missing Database Connection String or Password");
    exit(1);
  }

  return databaseUrl?.replace("<PASSWORD>", databasePassword);
}

export function getPortNumber(): number {
  const port = process.env.PORT || 4000;
  if (typeof port === "number") {
    return port;
  } else {
    return parseInt(port, 10);
  }
}

export const portNumber = process.env.PORT || 4000;
