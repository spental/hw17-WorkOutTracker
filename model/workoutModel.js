const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  day: {
    type: Date,
  },

  exercises: [{
    type: {
      type: String
    },
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  }]
});

const workout = mongoose.model("workout", UserSchema);

module.exports = workout;
