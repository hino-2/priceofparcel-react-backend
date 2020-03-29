var express = require('express');
var fetch = require('node-fetch');
var async  = require('express-async-await');
var router = express.Router();

/* GET OPS info by index */
router.get('/', async function(req, res, next) {
    const response = await fetch(`https://otpravka-api.pochta.ru/postoffice/1.0/${req.query.index}`, {
        headers: {
            'Authorization': 'AccessToken xSM9_NRbR3YohZgelizHeOYpx8AyRn9a',
            'X-User-Authorization': 'Basic c2luaWdhbWkwQGdtYWlsLmNvbTpoaW5vY2hhbg==',
            'Content-Type': 'application/json;charset=UTF-8'            
        }
    });
    const info = await response.json();
    res.send(JSON.stringify(info));
});

module.exports = router;