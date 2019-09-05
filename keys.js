const dotEnv = require("dotenv");
dotEnv.config();

exports.keys = {
	mongodb: `${process.env.AUTH_MONGO_DB}`,
 fontawesome: process.env.FONTAWESOME,
 secretSession: process.env.SECRET_SESSION
};
