const Router = require('express').Router()
const categoryController = require('./../controllers/categoryController')

Router.post('', categoryController.create)

module.exports = Router