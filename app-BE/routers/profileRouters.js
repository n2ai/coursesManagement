const router = require('express').Router();
const profileControllers = require('../controllers/profileControlllers');
router.get('/:id',profileControllers.verifyUser)
router.get('/:id/addClass',profileControllers.fetchClasses)
module.exports = router;