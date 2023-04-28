import express, { Router } from 'express';
import sequelize from 'sequelize';
import bodyparser from 'body-parser';
import cors from 'cors';
import router from './Routers/userRouter.js';
import pool from './Config/db.js';
const port = 5000;

const app = express();
app.use(express.json());
app.use(bodyparser.json());
app.use(cors());

app.use('/', router);


app.listen(port, () => {
    console.log('Server is running on port 3000');
});

pool.on('connect', () => {
    console.log('Database connection established successfully');
  });
