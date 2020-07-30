const router = require("express").Router();
const db = require("../models");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.get("/api/workouts/", (req, res) => {
  db.Workout.find({}).then((dbWorkout) => {
    console.log(dbWorkout);
    res.json(dbWorkout);
  });
});

app.put("/api/workouts/:id", (req, res) => {
  db.Workout.update(
    { _id: req.params.id },
    { $set: { exercises: [req.body] } }
  ).then((dbWorkout) => {
    res.json(dbWorkout);
  });
  // db.Exercise.create(req.body)
  //   .then(() =>
  //     db.Workout.findById(req.params.id).then({
  //       $push: { exercises: [req.body] },
  //     })
  //   )
  //   .then((dbExercise) => {
  //     res.json(dbExercise);
  //   });
});
app.post("/api/workouts/", (req, res) => {
  db.Workout.create(req.body).then((dbWorkout) => {
    res.json(dbWorkout);
  });
});

app.get("/api/workouts/range", ({ body }, res) => {
  db.Workout.find({}).then((dbWorkout) => {
    res.json(dbWorkout);
  });
});
module.exports = router;
module.exports = app;
