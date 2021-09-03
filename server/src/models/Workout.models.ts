import mongoose from 'mongoose';

// Workout Schema
let workoutSchema = new mongoose.Schema({
    id: String,
    name: String
});

export const Workout = mongoose.model("Workout", workoutSchema);