import { Router } from 'express'
import userController from '../controllers/auth/user.controller'
import isLoggedOut from '../middlewares/isLoggedOut'
import isLoggedIn from '../middlewares/isLoggedIn'
import passport from 'passport'

const router = Router()

router.get('/', isLoggedIn, (req, res) => {
    console.log("req user", req.user)
    res.render('index', {
        user: req.user
    })
})

router.get('/login', isLoggedOut, (req, res) => {
    res.render('auth/login')
})

router.get('/logout', (req, res) => {
    req.session.user = null
    req.flash('success_msg', 'You have successfully logged out')
    res.redirect('/')
})

router.post('/login', userController.login)

router.get('/register', isLoggedOut, (req, res) => {
    res.render('auth/register')
})

router.get('/settings', isLoggedIn, (req, res) => {
    res.render('auth/settings')
})

// router.post('/register', userController.register)

router.post('/register', passport.authenticate('local', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/auth/register', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}))

router.get('/recover', (req, res) => {
    res.render('auth/forget')
})


//social login routes

//FACEBOOK
router.get('/facebook', passport.authenticate('facebook'))
router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/auth/register', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}))

//GITHUB
router.get('/github', passport.authenticate('github'))
router.get('/github/callback', passport.authenticate('github', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/auth/register', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}))

//TWITTER
router.get('/twitter', passport.authenticate('twitter'))
router.get('/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/auth/register', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}))

export default router