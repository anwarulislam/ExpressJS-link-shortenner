// User all route file to app
const userSchema = require('./../validators/user')
const validator = require('./../validators')
const { handleError, ErrorHandler } = require('./../helpers/error')

module.exports = (app) => {

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

    app.post('/api', validator(userSchema), (req, res) => {
        console.log('/update');
        throw new ErrorHandler(404, 'User with the specified email does not exists')
        // res.json(req.body);
    })
}