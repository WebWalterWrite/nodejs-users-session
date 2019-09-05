const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const findUser = require("../models/queries/user.query").findUser;


// Initialiser la session
passport.serializeUser((user, done) => done(null, user._id));

// Récupérer la session depuis le navigateur 
passport.deserializeUser(async (id, done) => {
	const user = await findUser("_id", id, "profile", "test");
	return user && done(null, user);
});


passport.use(
	new LocalStrategy(
		{
			usernameField: "nickname"
		},
		async (username, password, done) => {
			const user = await findUser("nickname", username);

			return !user
				? done(null, false, { message: "Désolé, ce pseudo n'existe pas." }) // Si le pseudo n'existe pas
				: user && user.password !== password // Si le mot de passe est incorrect
				? done(null, false, { message: "Le mot de passe est incorrect" })
				: done(null, user); // Si nickname et password ok
		}
	)
);
