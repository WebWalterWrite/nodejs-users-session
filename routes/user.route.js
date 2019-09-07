const router = require('./config.js');
const isAuthenticated = require('../controllers/user.controller').isAuthenticated;
const getUserProfile = require ('../controllers/user.controller').getUserProfile;
const destroyUserSession = require ('../controllers/user.controller').userDestroySession;

router.get('/user-session', isAuthenticated, getUserProfile);

router.get("/user-session/log-out", isAuthenticated, destroyUserSession);


module.exports = router;