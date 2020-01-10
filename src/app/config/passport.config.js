import User from './../models/User'
import passport from 'passport'
import userController from '../controllers/auth/user.controller';

const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;

const passportConfig = () => {

    const config = {
        twitter: {
            consumerKey: 'cChZNFj6T5R0TigYB9yd1w',
            consumerSecret: 'get_your_own',
            callbackURL: `${process.env.URL}/auth/twitter/callback`
        },
    }


    // used to serialize the user for the session
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    // used to deserialize the user
    passport.deserializeUser((id, done) => {
        User.findById(id, function (err, user) {
            done(err, user)
        })
    })

    passport.use(new LocalStrategy({
        passReqToCallback: true
    }, (req, username, password, done) => {
        console.log(username)
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ username }, function (err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err)

            // check to see if theres already a user with that email
            if (user) {
                console.log('user paise')
                return done(null, false, req.flash('errors', 'That username is already taken.'))
            } else {

                const userData = req.body

                // if there is no user with that email
                // create the user
                var newUser = new User({
                    username: username,
                    name: userData.name,
                    email: req.body.email || null
                })

                newUser.password = newUser.generateHash(password)

                // save the user
                newUser.save(function (err) {
                    if (err)
                        throw err
                    return done(null, newUser)
                });
            }

        })
    }))

    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL
    }, userController.facebook))

    passport.use(new TwitterStrategy({
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: process.env.TWITTER_CALLBACK_URL
    }, userController.twitter))

    passport.use(new GithubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL
    }, userController.github))

    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
    }, userController.google))

}


export default passportConfig