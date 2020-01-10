
import express from 'express'
import connectDB from './app/config/db.config'
import setEnvironment from './app/config/environment.config';
import runSocket from './app/config/socket.config';
import env from 'dotenv'
import passport from 'passport';
import router from './app/routes';

env.config()
//setup Dependencies
var app = express()
connectDB()
setEnvironment(app, express, passport)
app.use('/', router)


//Run application over custom port
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT || 3000}`);
});

//Setup Socket.IO
runSocket(server)