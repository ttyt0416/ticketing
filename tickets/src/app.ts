import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from '@yctickets/common';


const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test'
    //when secure is true, cannot invest cookie with jest because jest use http request, 
    //so process.env.NODE_ENV !== 'test' means set secure false when it is enviroment setup like jest
  })
);


app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
