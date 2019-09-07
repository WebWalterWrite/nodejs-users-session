
/**
 * @description - Vérifie si une session existe
 */
exports.isAuthenticated = (req, res, next) =>  req.isAuthenticated() ? next() : res.json({ user: false });

/**
 * @description - renvoi les données users
 */
exports.getUserProfile = (req, res) => res.json({ user: req.user });

/**
 * @description - Supprimer la session
 */
exports.userDestroySession = (req, res, next) => {
 req.session.destroy();

 return res.json({session: false});
};


