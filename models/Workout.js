const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');
const moment = require('moment');
const Exercise = require('../models/Exercise');
const User = require('../models/User');

const exerciseSchema = new mongoose.Schema({
   _exerciseId: {type: mongoose.Schema.Types.ObjectId, ref: Exercise},
    reps: [Number]
    }
);

const workoutSchema = new mongoose.Schema({
  startTime: { type: Date, default: Date.now },
  _userId: {type: mongoose.Schema.Types.ObjectId, ref: User},
  
  exercises:  [exerciseSchema]

}, { timestamps: true });


workoutSchema.methods.day = function (size) {
  return moment(this.startTime).format('L')
  }

const Workout = mongoose.model('Workout', workoutSchema);



module.exports = Workout;
