
import { exit } from "process";
import { LOGGER } from "./logger";


export function getDbConnectionString(): string {
  const currentEnvironment = getEnvMode();
  let databaseUrl: string | undefined;
  switch (currentEnvironment) {
    case "DEVELOPMENT":
      databaseUrl = process.env.DATABASE_REMOTE_DEVELOPMENT;
      break;

    case "PRODUCTION":
      databaseUrl = process.env.DATABASE_REMOTE_PRODUCTION;
      break;

    default:
      LOGGER.error("Invalid or missing Environment Mode valuess");
      exit(1);
  }

  LOGGER.info("Development Mode:", currentEnvironment);

  if (!databaseUrl) {
    LOGGER.error("Missing Database Connection String or Password");
    exit(1);
  }

  return databaseUrl;
}

export function getPortNumber(): number {
  const PORT = process.env.PORT;
  if (!PORT) {
    LOGGER.error("Missing Port Number required env vars!");
    exit(1);
  }
  return parseInt(PORT, 10);
}

export function getEnvMode(): string {
  const nodeEnv = process.env.NODE_ENV;

  const nodeEnvState = nodeEnv != "DEVELOPMENT" && nodeEnv != "PRODUCTION";
  if (nodeEnvState) {
    LOGGER.error("Invalid or missing Environment Mode value");
    exit(1);
  }
  return nodeEnv;
}
