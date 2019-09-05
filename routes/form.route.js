const router = require('./config.js');
const createUser = require('../controllers/form.controller').userConnexion;
const userConnexion = require ('../controllers/form.controller').userConnexion
const formCreateUser = require ('../controllers/form.controller.js').formCreateUser;
const passport = require('passport')


router.post('/user-connexion', userConnexion );

module.exports = router;