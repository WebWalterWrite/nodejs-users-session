const express = require("express");
const router = express.Router({strict: true});

router.use((req, res, next) => {

	res.header("Access-Control-Allow-Origin", req.headers.origin);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, Content-Type, Accept, Authorization, X-Requested-With, x-auth-token"
	);
	res.header(
		"Access-Control-Allow-Methods",
		"GET,HEAD,POST,PUT,DELETE,OPTIONS"
	);
	res.header("Access-Control-Allow-Credentials", "true");
	if ('OPTIONS' === req.method) {
    res.sendStatus(200);
} else {
    next();
}
});

module.exports = router;
