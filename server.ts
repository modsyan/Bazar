import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({
  path: "./config.env",
});

import {app} from "./app";

console.log("MODE:", process.env.NODE_ENV);

if (!process.env.DATABASE_REMOTE || process.env.DATABASE_PASSWORD) {
  process.exit(1);
}

const DBCredentials = process.env.DATABASE_REMOTE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD!
);

mongoose
  .connect(DBCredentials)
  .then((conn) =>
    console.log(
      "connected successfully with database: ",
      conn.connection.db.namespace
    )
  );

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`App is running at ${port} Port Number...`));
