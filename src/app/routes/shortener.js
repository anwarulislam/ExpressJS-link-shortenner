const Router = require('express').Router()
const ifLogged = require('./../middlewares/ifLogged')

Router.get('/c', ifLogged, (req, res) => {
    res.render('index')
})

module.exports = Router