const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// creating the workout schema for adding exercies on a workout day. some fields have validation to require input//
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter the type of exercise you wish to add"
        },
        name:{
            type: String,
            trim: true,
            required: "Enter the name of the exercise you wish to add"
        },
        duration: {
            type: Number,
            trim: true,
            required: "Enter the duration of this exercise"
        },
        weight: {
            trim: true,
            type: Number,
        },
        reps: {
            trim: true,
            type: Number,
        },
        sets: {
            trim: true,
            type: Number,
        },
        distance: {
            trim: true,
            type: Number,
        }
    }]
}, {
    toJSON: {
        // include any virtual properties when data is requested
        virtuals: true
    }
});
// adds a dynamically-created property to schema
WorkoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

//exporting the workout schema//
const workout = mongoose.model("workout", WorkoutSchema);
module.exports = workout;