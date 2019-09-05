const db = require("../config.mongo");
const Users = require("../schemas/user.schema");

/**
	* @description - Enregistrer un user
	* @param {object} - Contient les props et values de champs
 */
exports.insertUser = async data => {
	const User = new Users(data);

	const result = User.save();

	return result;
};

/**
	* @description - Récupérer un user 
	*@param {string} field - Le champ de recherche
	*@param {string} value - La valeur recherchée
	*@param {string} args - Options de recherche
 */
exports.findUser = async (field, value, ...args) => {
	try {
		const profile = args.find( el => el === 'profile');

		const ifUser = profile
			? await Users.findOne({ [field]: value }).select("-password") // Retourner les données user sans le password
			: await Users.findOne({ [field]: value }); // Retounrer l'intégralité du document

		return ifUser;

	} catch (error) {
		console.log(error);
	}
};
