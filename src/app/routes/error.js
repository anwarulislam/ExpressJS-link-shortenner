// User all route file to app
import { handleError, ErrorHandler } from './../helpers/error'
import validate from '../validators';
import UserSchema from '../validators/user';


const Router = require('express').Router()

Router.get('/', (req, res) => {
    res.render('index')
})

Router.post('/api', validate(UserSchema), (req, res) => {
    console.log('/update');
    throw new ErrorHandler(404, 'User with the specified email does not exists')
    // res.json(req.body);
})

//A Route for Creating a 500 Error (Useful to keep around)
Router.get('/500', function (req, res) {
    throw new Error('This is a 500 Error');
});

//The 404 Route (ALWAYS Keep this as the last route)
Router.get('/*', function (req, res) {
    throw new NotFound;
});

function NotFound(msg) {
    this.name = 'NotFound';
    Error.call(this, msg);
    // Error.captureStackTrace(this, arguments.callee);
}

module.exports = Router