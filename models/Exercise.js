const mongoose = require('mongoose');
const exerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
}, { timestamps: true });

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
