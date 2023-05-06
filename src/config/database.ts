import mongoose from "mongoose";
import { config } from "dotenv";




console.log("MODE:", process.env.NODE_ENV);

if (!process.env.DATABASE_REMOTE || process.env.DATABASE_PASSWORD) {
  process.exit(1);
}



mongoose
  .connect(DBCredentials)
  .then((conn) =>
    console.log(
      "connected successfully with database: ",
      conn.connection.db.namespace
    )
  );
