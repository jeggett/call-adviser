const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define  user model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// Create model class (constructor for documents)
// which corresponds to a collection `users`
const modelClass = mongoose.model('user', userSchema);

module.exports = modelClass;