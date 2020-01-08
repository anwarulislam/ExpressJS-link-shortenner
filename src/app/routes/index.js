// User all route file to app
import { handleError, ErrorHandler } from './../helpers/error'
import validate from '../validators';
import UserSchema from '../validators/user';

const Routes = (app) => {

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

    app.use(async (req, res, next) => {
        app.locals.errors = req.flash('errors')

        req.isAuthenticated = req.session.user ? true : false

        if (req.isAuthenticated) {

            const user = await User.findOne({
                username: req.session.user.username
            })
            req.user = req.session.user
        }
        app.locals.user = req.session.user

        app.locals.success_msg = req.flash('success_msg')

        next()
    })

    app.use('/auth', require('./auth'))
    app.use('/categories', require('./category'))
    app.use('/shortener', require('./shortener'))

    app.get('/', (req, res) => {
        res.render('index')
    })

    app.post('/api', validate(UserSchema), (req, res) => {
        console.log('/update');
        throw new ErrorHandler(404, 'User with the specified email does not exists')
        // res.json(req.body);
    })
}

export default Routes