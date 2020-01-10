import ejsLayout from 'express-ejs-layouts'
import expressSession from 'express-session'
import expressValidator from 'express-validator'
import cookieParser from 'cookie-parser'
import flashConnect from 'connect-flash'
import path from 'path'
import sass from 'node-sass'
import { handleError } from './../helpers/error'
import passportConfig from './passport.config'


const setEnvironment = (app, express, passport) => {
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
    app.use(passport.session())
    //passport

    passportConfig()
    app.use(async (req, res, next) => {
        app.locals.errors = req.flash('errors')

        req.isAuthenticated = req.session.user ? true : false

        if (req.isAuthenticated) {
            console.log(req.session)
            // const user = await User.findOne({
            //     username: req.session.user.username
            // })
            req.user = req.session.user
        }
        app.locals.user = req.session.user

        app.locals.success_msg = req.flash('success_msg')

        next()
    })
}

export default setEnvironment