//setup Dependencies
var express = require('express'),
    app = express(),
    port = (process.env.PORT || 3000);

require('dotenv').config()
require('./src/app/config/db.config')
require('./src/app/config/environment.config')(app, express)
require('./src/app/routes')(app)

//Run application over custom port
const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

//Setup Socket.IO
require('./src/app/config/socket.config')(server)


///////////////////////////////////////////
//              Routes                   //
///////////////////////////////////////////

/////// ADD ALL YOUR ROUTES HERE  /////////


//A Route for Creating a 500 Error (Useful to keep around)
app.get('/500', function (req, res) {
    throw new Error('This is a 500 Error');
});

//The 404 Route (ALWAYS Keep this as the last route)
app.get('/*', function (req, res) {
    throw new NotFound;
});

function NotFound(msg) {
    this.name = 'NotFound';
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
}