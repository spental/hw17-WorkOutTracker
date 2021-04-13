`use strict`;

const db = require(`../models`);

module.exports = app => {
  app.get(`/api/workouts/`, (req, res) => {
    db.Workout.find({})

      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
  app.get(`/api/workouts/range`, (req, res) => {
    db.Workout.find({})
      .sort({ day: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout.slice(0, 10));
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post(`/api/workouts`, (req, res) => {
    db.Workout.create({})
      .then(addWorkout => {
        res.json(addWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.put(`/api/workouts/:id`, (req, res) => {
    db.Workout.update(
      { _id: req.params.id },
      { $push: { exercises: req.body } }
    )
      .then(addToWorkout => {
        res.json(addToWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
