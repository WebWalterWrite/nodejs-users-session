const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
	nickname: {
		type: String,
		required: true,
		unique: true,
		maxlength: 20
	},
	password: {
  type: String,
  required: true,
	},
	// A rajouter email, avatar photo
});

module.exports = Users = model("users", userSchema);

 
