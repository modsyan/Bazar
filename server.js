const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({
  path: "./config.env",
});

const app = require("./app");

console.log("MODE:", process.env.NODE_ENV);

const DBCred = process.env.DATABASE_REMOTE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DBCred)
  .then((connection) =>
    console.log(
      "connected successfully with database: ",
      connection.connection.DBCred.namespace
    )
  );

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`App is running at ${port} Port Number...`)
);
