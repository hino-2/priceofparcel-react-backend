'use strict';

// [START gae_node_request_example]
const express = require('express');
const path = require('path');

var indexRouter            = require('./routes/index');
var servicesRouter         = require('./routes/services');
var getOPSByCoordsRouter   = require('./routes/getOPSByCoords');
var getOPSByAddressRouter  = require('./routes/getOPSByAddress');
var getOPSInfoRouter       = require('./routes/getOPSInfo');
var getCountriesListRouter = require('./routes/getCountriesList');

const app = express();

// app.use('/', indexRouter);
app.use('/services', servicesRouter);
app.use('/getOPSByCoords', getOPSByCoordsRouter);
app.use('/getOPSByAddress', getOPSByAddressRouter);
app.use('/getOPSInfo', getOPSInfoRouter);
app.use('/getCountriesList', getCountriesListRouter);

app.use("/", express.static(__dirname + '/'));
app.use("/static", express.static(__dirname + '/static'));
app.use("/img", express.static(__dirname + '/img'));
app.use("/db", express.static(__dirname + '/db'));
app.use("/ecom", express.static(__dirname + '/ecom'));

app.get('/', (req, res) => {
  // res.status(200).send('Hello, world!').end();
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;
