const Router = require('express').Router()
const userController = require('./../controllers/userController')

Router.get('/', (req, res) => {
    res.render('index')
})


Router.get('/login', (req, res) => {
    res.render('auth/login')
})

Router.get('/logout', (req, res) => {
    req.session.user = null
    res.redirect('/')
})

Router.post('/login', userController.login)

Router.get('/register', (req, res) => {
    res.render('auth/register')
})

Router.post('/register', userController.register)
Router.get('/forget_password', (req, res) => {
    res.render('auth/forget')
})




module.exports = Router