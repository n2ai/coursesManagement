const router = require('express').Router()
const loginControllers = require('../controllers/loginControllers')
router.post('/',loginControllers.login)

module.exports = router