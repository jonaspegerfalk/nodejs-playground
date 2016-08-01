const mongoose = require('mongoose');

const exerciseTypes = ['Free weight', 'Machine', 'Body weight'] 

const exerciseSchema = new mongoose.Schema({
  name: String,
  type: {type:String, enum: exerciseTypes, default: 'Machine'},
  description: String,
}, { timestamps: true });

exerciseSchema.methods.exerciseTypes = function (){return exerciseTypes};

const Exercise = mongoose.model('Exercise', exerciseSchema);



module.exports = Exercise;
