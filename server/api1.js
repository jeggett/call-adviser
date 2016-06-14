const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Authentication = require('./controllers/authentication');


const api = express.Router(); // eslint-disable-line new-cap

// connect to MongoDB serverr
mongoose.connect('mongodb://localhost:27017/call-adviser');

api.use(bodyParser.json({ type: '*/*' }));

api.post('/signup', Authentication.signup);

module.exports = api;
