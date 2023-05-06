import express from "express";

import morgan from 'morgan';
import userRoute from './routes/userRoute';
export const app = express();
if(process.env.NODE_ENV === "development") {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`))

app.use('/api/v1/users/', userRoute);