import mongoose from 'mongoose';

// Workout Schema
let workoutDayDetailsSchema = new mongoose.Schema({
    id: String,
    workoutID: String,
    workoutName: String,
    date: String,
    exercises:[{
        name: String,
        bodyPart: String,
        sets: Number,
        reps: Number,
        weight: Number,
        notes: String
    }]
});

export const Workout = mongoose.model("Workout", workoutDayDetailsSchema);