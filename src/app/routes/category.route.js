import { Router } from 'express'
import categoryController from '../controllers/category.controller'

const router = Router()

router.get('', categoryController.index)
router.get('/:id', categoryController.indexById)
router.post('', categoryController.create)
router.put('/:id', categoryController.update)
router.delete('/:id', categoryController.remove)

export default router