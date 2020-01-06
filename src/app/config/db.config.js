//Import mongoose library
const mongoose = require('mongoose');

//connect db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => {
        console.log('MongoDB successfully connected')
    })
    .catch(err => {
        console.log('Database disconnected')
    })