const Router = require('express').Router()
const isLoggedIn = require('../middlewares/isLoggedIn')

Router.get('/create', isLoggedIn, (req, res) => {
    res.render('index')
})

module.exports = Router