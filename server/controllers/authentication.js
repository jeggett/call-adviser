const User = require('../models/user');

exports.signup = function signupRequestHandler(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // See if the user with the given email exists.
  // ExistingUser is null if the user not found
  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      next(err);
      return;
    }

    // If a user with a email does exist return an error
    if (existingUser) {
      res.status(422); // 422 - unprocessable entity
      res.send({ error: 'This email is already in use' });
      return;
    }

    // If a user with email does not exist create and
    // save user record
    const user = new User({ email, password });
    user.save(errSave => {
      if (errSave) {
        next(errSave);
        return;
      }

      // Respond to request indicating the user was created
      res.json({ success: true });
    });
  });
};
