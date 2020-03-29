var express = require('express');
var router = express.Router();

/* GET services listing. */
router.get('/', function(req, res, next) {
 	res.locals.connection.query('SELECT * FROM services INNER JOIN category ON category.cat_id = services.cat_id ORDER BY category.cat_id, services.name', function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});

module.exports = router;