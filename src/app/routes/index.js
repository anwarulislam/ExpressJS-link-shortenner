import { Router } from 'express'

import AuthRoutes from './auth.route'
import CategoryRoutes from './category.route'
import passport from 'passport'

const router = Router()

router.use('/auth', AuthRoutes)
router.use('/categories', CategoryRoutes)
router.use('/shortener', require('./shortener.route'))
router.use('/', require('./error'))

export default router