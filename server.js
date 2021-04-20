const express = require("express");
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3030;

<<<<<<< HEAD
const db = require("./models");
=======
const PORT = process.env.PORT || 8089;
// express app//
>>>>>>> 00dfa1a84dd1daae851101f4b41f753996649363
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

<<<<<<< HEAD


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,

});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, null, { sort: { day: 1 } })
        .populate("exercises")
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.put("/api/workouts/:id", (req, res) => {
    var workoutID = req.params.id;
    db.Exercise.create(req.body)
        .then(({ _id }) =>
            db.Workout.findOneAndUpdate({ _id: workoutID }, { $push: { exercises: _id } }, { new: true })
        )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}, null, { sort: { day: 1 } })
        .populate("exercises")
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
=======
// set our mongoose connection to  the mongo atlas uri or local host//
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admin:Password69@cluster0.ekoru.mongodb.net/myFirstDatabase", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
>>>>>>> 00dfa1a84dd1daae851101f4b41f753996649363
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});