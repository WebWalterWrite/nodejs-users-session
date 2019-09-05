const router = require('./config.js');
const isAuthenticated = require('../controllers/user.controller').isAuthenticated;
const getUserProfile = require ('../controllers/user.controller').getUserProfile;


router.get('/user-session', isAuthenticated, getUserProfile);

module.exports = router;