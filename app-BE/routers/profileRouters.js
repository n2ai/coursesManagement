const router = require('express').Router();
const profileControllers = require('../controllers/profileControlllers');
router.get('/:id',profileControllers.verifyUser)
module.exports = router;