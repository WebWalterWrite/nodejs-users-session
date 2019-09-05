const mongoose = require("mongoose");
const mongoUrl = require("../keys.js").keys.mongodb;
mongoose.connect(mongoUrl, {
	useNewUrlParser: true,
	useCreateIndex: true
});

const mongo = mongoose.connection;

/**
	* @description - Afficher le le nom de la base de donnée liée à l'évent.
	* @param {string} event - Type d'event sur la database (error, open, close, disconnected)
	* @param {object} param1 - Objet destructuré afin de récupérer la dbname
	*/
const dbName = (event, { db: {s: { databaseName } } }) => console.log(`${event} to database : ${databaseName}`);


mongo.on("error", console.error.bind(console, "connection error:"));

mongo.once("open", () => dbName('Connected ', mongo));

mongo.on("disconnected", () => dbName('Connection Disconnected', mongo));

mongo.on("close", () => dbName('Connection Closed', mongo));

module.exports = mongo;
