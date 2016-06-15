const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define  user model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', (next) => {
  // Context is the user model
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      next(err);
      return;
    }

    bcrypt.hash(user.password, salt, null, (errHash, hash) => {
      if (errHash) {
        next(errHash);
        return;
      }

      // Overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});

// Create model class (constructor for documents)
// which corresponds to a collection `users`
const modelClass = mongoose.model('user', userSchema);

module.exports = modelClass;
