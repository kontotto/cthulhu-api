var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  list: []
});

module.exports = mongoose.model('User', userSchema);
