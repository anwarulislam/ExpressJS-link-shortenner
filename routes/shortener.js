const Router = require('express').Router()

Router.get('/create', (req, res) => {
    res.render('shortener/create')
})

module.exports = Router