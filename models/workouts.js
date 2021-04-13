"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutsSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => Date.now(),
      unique: true
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter exercise type"
        },
        name: {
          type: String,
          trim: true,
          require: "Enter name of exercise"
        },
        duration: {
          type: Number,
          required: "Enter the duration"
        },
        weight: {
          type: Number,
          required: "Number is required"
        },
        reps: {
          type: Number,
          required: "Number is required"
        },
        sets: {
          type: Number,
          required: "Number is required"
        },
        distance: {
          type: Number,
          require: "Number is requried"
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

workoutsSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

module.exports = mongoose.model(`workouts`, workoutsSchema);
