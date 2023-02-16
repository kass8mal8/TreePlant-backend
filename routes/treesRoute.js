const { Router } = require('express')
const treeController = require('../controllers/treeControllers')
const router = Router()


router.post('/trees', treeController)

module.exports = router