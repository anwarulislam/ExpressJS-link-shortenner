const Router = require('express').Router()
const categoryController = require('./../controllers/categoryController')

Router.get('', categoryController.index)
Router.get('/:id', categoryController.indexById)
Router.post('', categoryController.create)
Router.put('/:id', categoryController.update)
Router.delete('/:id', categoryController.remove)

module.exports = Router