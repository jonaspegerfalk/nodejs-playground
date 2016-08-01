const async = require('async');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const passport = require('passport');
const Exercise = require('../models/Exercise');

/**
 * GET /login
 * Login page.
 */
exports.getExercise = (req, res) => {
  res.render('exercise/details', {
    title: 'Exercise'
  });
};

exports.getExerciseDetails = (req, res) => {
  const exercise = Exercise.findById(req.params.id, (err, exercise) => {
    res.render('exercise/details', {
      title: 'Exercise',
      exercise
    });
  });
};

exports.getExercises = (req, res) => {
   Exercise.find((err, exercises) => {

     console.log(exercises);
    res.render('exercise/exercises', {
      title: 'Exercise Managment', 
      exercises
    });
  });
};


/**
 * POST /signup
 * Create a new local account.
 */
exports.postExercise = (req, res, next) => {

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return;
  }


    const exercise = new Exercise({
      name : req.body.name,
      description : req.body.description
    });

    exercise.save((err) => {
      res.redirect('/exercises');
    });
      console.log(req.body);

 
};


exports.postExerciseDetails = (req, res, next) => {
  const errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors);
    return;
  }

  const exercise = Exercise.findById(req.params.id, (err, exercise) => {
  exercise.description = req.body.description;
  exercise.name = req.body.name;
  exercise.type = req.body.type;
    exercise.save((err) => {
      res.redirect('/exercise/details/'+exercise._id);
    });

  });

  
 
};