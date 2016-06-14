const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const api = express.Router();

api.use(bodyParser.json({ type: '*/*' }));

api.get('/someroute', function (req, res) {
  res.send('Sample response for /someroute');
});

module.exports = api;