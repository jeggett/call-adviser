const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

// Create model class (constructor for documents)
// which corresponds to a collection `users`
const modelClass = mongoose.model('user', userSchema);

module.exports = modelClass;
