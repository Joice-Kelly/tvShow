import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { connectToDB } from './config/db';
import { showsRouter } from './routes/shows'

connectToDB();

export const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/shows", showsRouter);