import {sequelize, User, Comment, Post, modulesRouter, errorHandler as err, notFound,ass} from './index.js';
import express from 'express';

let app = express();
async function start() {
    app.use(express.json());
    app.use('/',modulesRouter);
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Tables created');
    app.use(notFound)
    app.use(err)
    app.listen(3000,()=>console.log('Server is running on port 3000'));
}

start();