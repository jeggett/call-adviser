const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user._id, iat: timestamp }, config.secret); // eslint-disable-line no-underscore-dangle
}

exports.signup = function signupRequestHandler(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(422);
    res.send({ error: 'You must provide email and password' });
    return;
  }

  const emailRegexp = /^[^@]+@[^@]+\.[^@]+$/i;
  if (!emailRegexp.test(email)) {
    res.send({ error: 'Email has invalid format' });
    return;
  }

  // Password contains at least: one upper-, one lowercase
  // english letter, one digit, one special char, >= 8 length
  const passwordRegexp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (!passwordRegexp.test(password)) {
    res.send({ error: 'Password is invalid' });
    return;
  }

  // See if the user with the given email exists.
  // ExistingUser is null if the user not found
  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    // If a user with a email does exist return an error
    if (existingUser) {
      res.status(422); // 422 - unprocessable entity
      return res.send({ error: 'This email is already in use' });
    }

    // If a user with email does not exist create and
    // save user record
    const user = new User({ email, password });
    user.save(errSave => {
      if (errSave) {
        return next(errSave);
      }

      // Respond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};

exports.signin = function signInRequestHandler(req, res, next) {
  // User has already had their email and password authorized
  // so we just need to give them a token

  // When we called done(null, user) in 'local' strategy
  // Passport.js populated req with user model instance
  res.send({ token: tokenForUser(req.user) });
};
