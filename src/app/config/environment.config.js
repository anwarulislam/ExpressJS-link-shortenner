const ejsLayout = require('express-ejs-layouts'),
    expressSession = require('express-session'),
    expressValidator = require('express-validator'),
    cookieParser = require('cookie-parser'),
    flashConnect = require('connect-flash'),
    path = require('path'),
    sass = require('node-sass'),
    { handleError } = require('./../helpers/error'),
    passport = require('passport')


module.exports = (app, express) => {
    app.set('views', path.join(__dirname, '/../../views'))
    app.set('view engine', 'ejs')
    app.set('view options', { layout: false })
    app.use(express.urlencoded({
        extended: true
    }))
    app.use(express.json())
    app.use(expressValidator())
    app.use(expressSession({
        secret: process.env.SECRET_KEY,
        resave: null,
        saveUninitialized: true
    }));
    app.use(cookieParser())
    app.use(flashConnect())
    app.use(ejsLayout)
    app.use(express.static(path.join(__dirname, '/../public')))
    app.use((err, req, res, next) => {
        handleError(err, res);
    })
    app.use(passport.initialize())
}