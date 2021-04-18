const db = require("../models");
module.exports = function (app) {

// this is our post route for adding our workout information to the database//
    app.post("/api/workouts", function (req, res) {
        db.workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                res.json(err)
            })
    });

// this is the get request for retrieving the info back from our database to display on the webpage//
    app.get("/api/workouts", (req, res) => {
        db.workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            })
    }
    )

    // this put request lets us update any info on the database for a specific workout that we may want to add to
    app.put("/api/workouts/:id", (req, res) => {    
        const id = req.params.id;
        const body = req.body;
        db.workout.findByIdAndUpdate({ _id: id }, { $push: { exercises: body } })
          .then(workoutResults => {
            res.json(workoutResults);
          })
          .catch(err => {
            res.json(err);
          });
      });

      // lastly we use range to return only a portion of the http request//

    app.get("/api/workouts/range", (req, res) => {
        db.workout.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
    }); 
}