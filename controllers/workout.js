const async = require('async');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const passport = require('passport');
const Workout = require('../models/Workout');

/**
 * GET /workout
 * Workout page.
 */
exports.getNewWorkout = (req, res) => {
  res.render('workout/new', {
    title: 'Workout'
  });
};

exports.getWorkoutDetails = (req, res) => {
  const workout = Workout.findById(req.params.id, (err, workout) => {
    console.log('asdfa',err, workout);
    res.render('workout/details', {
      title: 'Workout',
      workout
    });
  });
};

exports.getWorkoutIndex = (req, res) => {
   Workout.find((err, workouts) => {

     console.log(workouts);
    res.render('workout/index', {
      title: 'Workout Managment', 
      workouts
    });
  });
};


/**
 * POST /workout
 * Create a new workout.
 */
exports.postNewWorkout = (req, res, next) => {

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return;
  }


    const workout = new Workout({
      date : req.body.date,
      startTime : req.body.startTime
    });

    workout.save((err, a) => {
      res.redirect('/workout/details/'+a.id);
    });
      console.log(req.body);

 
};

exports.postWorkoutDetails = (req, res, next) => {
};
