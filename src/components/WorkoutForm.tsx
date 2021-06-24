import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import workoutList from '../../src/temp/workoutList.json';

import {
    Button,
    Checkbox,
    TextField
} from '@material-ui/core';

const WorkoutForm = () => {
    const initialFormData = {
        bodyPart: {
            date: "",
            name: "",
            sets: "",
            reps: "",
            load: "",
            done: false,
            note: ""
        }
    }

    const data = workoutList;
    let [formData, setFormData] = useState(initialFormData);

    // Form
    const dispatch = useDispatch();
    const dataSelect = useSelector((state: any) => state);


    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("formData", formData);

        dispatch({
            type: 'ADD_WORKOUT',
            payload: formData
        });
        dispatch({
            type: 'SET_VISIBILITY_FILTER',
            payload: false
        })
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                >

                </TextField>
                <h3>Chest</h3>
                {data.chest.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox
                            value={formData.bodyPart.name}
                            onChange={(e: any) =>
                                setFormData({
                                    ...formData,
                                    bodyPart: {
                                    ...formData.bodyPart,
                                    name: e.target.value
                                    }
                                })
                            }
                            />
                            {console.log("form name", formData.bodyPart)}
                            {exercise}
                        </div>
                )}
                <h3>Back</h3>
                {data.back.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox 
                            />
                            {exercise}
                        </div>
                )}
                <h3>Arms</h3>
                {data.arms.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox 
                            />
                            {exercise}
                        </div>
                )}
                <h3>Triceps</h3>
                {data.triceps.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox 
                            />
                            {exercise}
                        </div>
                )}
                <h3>Biceps</h3>
                {data.biceps.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox 
                            />
                            {exercise}
                        </div>
                )}
                <h3>Legs</h3>
                {data.legs.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox 
                            />
                            {exercise}
                        </div>
                )}
                <h3>Calfes</h3>
                {data.calfes.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox 
                            />
                            {exercise}
                        </div>
                )}
                <h3>Abs</h3>
                {data.abs.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox 
                            />
                            {exercise}
                        </div>
                )}
                </form>
        </div>
    )
}

export default WorkoutForm;