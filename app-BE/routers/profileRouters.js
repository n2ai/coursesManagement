const router = require('express').Router();
const profileControllers = require('../controllers/profileControlllers');
router.get('/:id',profileControllers.verifyUser);
router.get('/:id/addClass',profileControllers.fetchClasses);
router.post('/:id/addClass',profileControllers.enroll)
module.exports = router;