const express = require('express');
const Exercise = require('../models/Exercise');

var apiRouter = express.Router();


apiRouter.route('/')
  .post(function(req, res) {
          
          var exercise = new Exercise(); 
          exercise.name = req.body.name; 

          // save the bear and check for errors
          exercise.save(function(err) {
              if (err)
                  res.send(err);

              res.json({ message: 'exercise created!' });
          })
  })
    .get(function(req, res) {
          Exercise.find(function(err, exercises) {
              if (err)
                  res.send(err);

              res.json(exercises);
          })
    });


exports.api = apiRouter;
