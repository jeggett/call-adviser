const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Authentication = require('./controllers/authentication');
require('./services/passport'); // execute code defining auth strategy
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

const api = express.Router(); // eslint-disable-line new-cap

// connect to MongoDB server
mongoose.connect('mongodb://localhost:27017/call-adviser');

api.use(bodyParser.json({ type: '*/*' }));

// test protected route
api.get('/', requireAuth, (req, res) => {
  res.send({ hi: 'there' });
});

api.post('/signin', requireSignin, Authentication.signin);

api.post('/signup', Authentication.signup);

module.exports = api;
