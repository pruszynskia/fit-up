import mongoose from 'mongoose';

// Workout Schema
let workoutSchema = new mongoose.Schema({
    id: String,
    name: String,
    exercises: [{
        name: String,
        bodyPart: String
    }]
});

export const Workout = mongoose.model("Workout", workoutSchema);