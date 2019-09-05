const createError = require("http-errors");
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongooseConnection = require("./models/config.mongo");
const bodyParser = require("body-parser");
const logger = require("morgan");
const dotEnv = require("dotenv");

// import routes
const usersFormRouter = require('./routes/form.route');
const userProfileRoute = require('./routes/user.route');
const app = express();
dotEnv.config();


app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Session
app.use(
	session({
		saveUninitialized: false,
		resave: false,
		secret: process.env.SECRET_SESSION,
		cookie: {
								maxAge: 24 * 60 * 1000,
    },
		store: new MongoStore({
			mongooseConnection: mongooseConnection,
			ttl: 24 * 60 * 1000,
			touchAfter: 24 * 3600,
		})
	})
);	

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/api', usersFormRouter, userProfileRoute);


module.exports = app;
