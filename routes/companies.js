var express = require('express');
var router = express.Router();

/* GET companies listing. */
router.get('/', function(req, res, next) {
 	res.locals.connection.query('SELECT * from company', function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

module.exports = router;