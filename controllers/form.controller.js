const insertUser = require("../models/queries/user.query").insertUser;
const passport = require("passport");

/**
 * @description - Créer le user.
 */
exports.createUser = async (req, res) => {
	try {
		// Extraire les données de l'objet
		const { nickname, email, avatar, password } = req.body;

		// Pour ce tutoriel je Simplifie le contrôle des champs en vérifiant simplement qu'ils ne sont pas vides.
		if (Object.values(req.body).filter(el => el).length !== 4)
			return res.json({ error: "Tous les champs doivent être remplis" });

		const newUser = await insertUser({
			nickname: nickname,
			password: password
		});

		newUser && res.status(200).json({ success: true});
	} catch (error) {
		console.log(error);
	}
};

/**
 * @description
 * Passport local authentification :
 * Si l'user n'est pas authentifié (user inexistant, mdp incorrect) on retourne une erreur via info.message
 * Si le user existe
 */
exports.userConnexion = (req, res, next) => {
	passport.authenticate("local", { session: true }, (err, user, info) => {
		if (err) return next(err);
		if (!user) return res.json({ error: info.message });

		req.login(user, err => {
			if (err) {
				return next(err);
			}

			// retourner le user sans le mot de passe

			return res.json({ success: user });
		});
	})(req, res, next);
};
