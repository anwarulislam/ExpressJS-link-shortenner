//Import mongoose library
// const mongoose = require('mongoose');

import mongoose from 'mongoose'

//connect db
const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        .then(res => {
            console.log('MongoDB successfully connected')
        })
        .catch(err => {
            console.log('Database disconnected')
        })
}

export default connectDB