require('dotenv').config()
import express from 'express'
import connectDB from './src/app/config/db.config'
import setEnvironment from './src/app/config/environment.config';
import runSocket from './src/app/config/socket.config';
import Routes from './src/app/routes';

//setup Dependencies
var app = express()
connectDB()
setEnvironment(app, express)
Routes(app)

//Run application over custom port
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT || 3000}`);
});

//Setup Socket.IO
runSocket(server)