const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  numOfActions: Number,
});

module.exports = mongoose.model('User', userSchema);