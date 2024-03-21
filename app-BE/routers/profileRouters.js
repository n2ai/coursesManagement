const router = require('express').Router();
const profileControllers = require('../controllers/profileControlllers');
router.post('/',profileControllers.fetchingData);

module.exports = router;