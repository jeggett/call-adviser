// This file holds Passport configuration

const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setup options for JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
};

// Create JWT strategy
// payload is decoded JWT-token { sub: 'user id', iat: 'time'}
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  // See if the user id and the payload exists in DB
  // if it does call done with user object as argument
  User.findById(payload.sub, (err, user) => {
    if (err) {
      return done(err, false);
    }

    if (user) {
      return done(null, user);
    }
    
    return done(null, false);
  });
});


// Tell passport to use this strategy
passport.use(jwtLogin);
