import ejsLayout from 'express-ejs-layouts'
import expressSession from 'express-session'
import expressValidator from 'express-validator'
import cookieParser from 'cookie-parser'
import flashConnect from 'connect-flash'
import path from 'path'
import sass from 'node-sass'
import passport from 'passport'
import { handleError } from './../helpers/error'


const setEnvironment = (app, express) => {
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

export default setEnvironment