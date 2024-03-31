const router = require('express').Router();
const profileControllers = require('../controllers/profileControlllers');
router.post('/',profileControllers.verifyUser);
router.get('/',profileControllers.getUserClasses)
module.exports = router;