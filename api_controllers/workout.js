const express = require('express');
const Workout = require('../models/Workout');

var apiRouter = express.Router();



apiRouter.route('/')
  .post(function(req, res) {
          
          var workout = new Workout(); 
          workout.name = req.body.name; 

          // save the bear and check for errors
          workout.save(function(err) {
              if (err)
                  res.send(err);

              res.json({ message: 'workout created!' });
          })
  })
    .get(function(req, res) {
          Workout.find(function(err, workouts) {
              if (err)
                  res.send(err);

              res.json(workouts);
          })
    });


exports.api = apiRouter;
