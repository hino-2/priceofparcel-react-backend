var express = require('express');
var fetch = require('node-fetch');
var async  = require('express-async-await');
var router = express.Router();

/* GET OPS by address */
router.get('/', async function(req, res, next) {
    const response = await fetch(`https://tariff.pochta.ru/tariff/v1/dictionary?jsontext&country`);
    const countries = await response.json();
    res.send(JSON.stringify(countries));
});

module.exports = router;