import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config/config';
import workoutRouter from './routes/routes';

mongoose.connect('mongodb://localhost:27017/workouts_db')
    .then(() => console.log('connected to mongo db'))
    .catch((err: any) => console.log(`Error connecting to db:\n${err}`))

const app = express();

app.use(cors());
app.use(bodyParser());

app.use("/", workoutRouter);
app.get("/", (req: Request, res: Response) => {
    res.send("expres server");
});

app.listen(config.server.port, () => console.log(`App listening at: \nhttp://localhost:${config.server.port}`));