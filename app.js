const express = require('express');
const app = express();
const morgan = require('morgan');
const userRoute = require('./routes/userRoute');

if(process.env.NODE_ENV === "development") {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.requestTime);
  next();
});

app.use('/api/v1/users/', userRoute);


app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl}, Wrong URL!`);
  err.status = "fail";
  err.statusCode = 404;
  next(err);
});
