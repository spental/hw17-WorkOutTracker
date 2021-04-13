const router = require("express").Router();
const workoutdb = require("../models/Workout.js");

//get
router.get("/api/workouts", (req, res) => {
  // this loads with index file (home page)
  console.log("home");
  workoutdb
    .find({})
    .then(function (data) {
      console.log("data"); //runs on initial page load
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  //add a limit for workouts pulled
  // this loads with dashboard - runs twice though
  console.log("dash opened");

  const datadb = workoutdb.find({});

  
  var mysort = { day: -1 };
  //set a range for date.now and 7 days ago

  datadb
    .sort(mysort)
    .limit(6) //put limit here?
    .then(function (data) {
      //data is the result of the find()
      console.log("second"); //+ JSON.stringify(data)
      //loads with dashboard(two times?)
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//post
router.post("/api/workouts", function (req, res) {
  //this goes to the new workout page
  console.log("post");
  workoutdb
    .create({})
    .then(function (dbworkout) {
      res.json(dbworkout);
    })
    .catch(function (err) {
      res.json(err);
    });
});

//put - update
router.put("/api/workouts/:id", function (req, res) {
  console.log("put");
  console.log(req.params.id);
  //this goes to the continue workout page
  workoutdb
    .findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true, runValidators: true }
    )
    .then(function (dbworkout) {
      res.json(dbworkout);
    })
    .catch(function (err) {
      res.json(err);
    });
});

module.exports = router;
