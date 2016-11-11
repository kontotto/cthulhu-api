var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  "name": { type: String, required: true, unique: true },
  "job": String,
  "desc": String,
  "str": Number,
  "con": Number,
  "pow": Number,
  "dex": Number,
  "app": Number,
  "siz": Number,
  "int": Number,
  "edu": Number,
  "hp": Number,
  "mp": Number,
  "san": Number,
  "idea": Number,
  "lucky": Number,
  "wisdom": Number,
  "dodge": Number,
  "skills": []
});

module.exports = mongoose.model('User', userSchema);
