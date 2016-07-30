const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');
const moment = require('moment');

const exerciseSchema = new mongoose.Schema({
   _exerciseId: mongoose.Schema.Types.ObjectId,
    reps: [Number]
    }
);

const workoutSchema = new mongoose.Schema({
  startTime: { type: Date, default: Date.now },
  _userId: mongoose.Schema.Types.ObjectId,
  
  exercises:  [exerciseSchema]

}, { timestamps: true });


workoutSchema.methods.day = function (size) {
  return moment(this.startTime).format('L')
  }

const Workout = mongoose.model('Workout', workoutSchema);



module.exports = Workout;
