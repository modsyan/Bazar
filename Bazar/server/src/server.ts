import { config as dotEnvConfig } from "dotenv";
import { createApp } from "./app";
import { dbConnection } from "./config/database";
import { getPortNumber } from "./utils/env";
import { LOGGER } from "./utils/logger";

(async () => {
  dotEnvConfig();
  await dbConnection();
  const PORT = getPortNumber();
  const app = await createApp();
  app.listen(PORT, () =>
    LOGGER.info(`App is running at ${PORT} Port Number...`)
  );
})();
