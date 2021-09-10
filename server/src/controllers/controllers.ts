import { Request, Response, NextFunction } from 'express';
import { Workout } from '../models/Workout.models';

const getAllWorkouts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const workouts = await Workout.find({})

        res.status(200).json({
            body: workouts
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error
        })
    }
};

const getWorkoutById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const workout = await Workout.findOne({ id });

        res.status(200).json({
            body: workout
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        })
    }
};

const addWorkout = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newWorkout = await new Workout({
            ...req.body
        }).save()

        res.status(201).json({
            body: newWorkout
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        })
    }
};

const updateWorkout = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body } = req;

        await Workout.findOneAndUpdate({ id: body.id }, { ...body })
            .then((workout: any) => {
                workout.save();
                res.status(200).json({
                    body: workout
                })
            })
            .catch((err: any) => {
                console.log(err);
                res.status(500).json({
                    error: err
                })
            })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        })
    }
};

const deleteWorkout = async (req: Request, res: Response) => {
    try {
        console.log(req);
        const { id } = req.query

        await Workout.findOneAndDelete({ id });

        res.status(200).json({
            body: id
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        })
    }
};

export default {
    getAllWorkouts,
    getWorkoutById,
    addWorkout,
    updateWorkout,
    deleteWorkout
};