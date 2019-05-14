const Router = require('express').Router()
//const userController = require('../controllers/userController')

Router.get('/', (req, res) => {
    res.render('index')
})

module.exports = Router