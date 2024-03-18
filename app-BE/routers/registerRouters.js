const router = require('express').Router()
const registerControllers = require('../controllers/registerControllers')
router.post('/',(registerControllers.registering))
module.exports = router