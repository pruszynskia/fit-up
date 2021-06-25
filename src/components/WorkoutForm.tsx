import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import workoutList from '../../src/temp/workoutList.json';

import {
    Button,
    Checkbox,
    TextField
} from '@material-ui/core';

interface WorkoutFormProps {
    handleForm: Function
}

const WorkoutForm = ({handleForm}: WorkoutFormProps) => {
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
    let [formData, setFormData] = useState<any>({
        name: ""
    });

    /**
     * 
     */

    // Form
    const dispatch = useDispatch();
    const dataSelect = useSelector((state: any) => state);


 

    const handleChange = (event: React.ChangeEvent<{value: unknown; name: string}>) => {
        setFormData({
            [event.target.name]: event.target.value as string
        })
    }
    
    console.log(formData)
    return (
        <div>
            <form onSubmit={(e: any) => handleForm(e, formData)}>
                <TextField
                    label="Title"
                    name="title"
                    value={formData.name}
                    onChange={handleChange}

                    />
                <h3>Chest</h3>
                {data.chest.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox
                            value={formData.name}
                            onChange={(e: any) => console.log(e.target.value)}
                            />
                            {exercise}
                        </div>
                )}
                <h3>Back</h3>
                {data.back.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox
                            value={formData.name}
                            onChange={(e: any) => console.log(exercise)}
                            />
                            {exercise}
                        </div>
                )}
                <h3>Arms</h3>
                {data.arms.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox
                            value={formData.name}
                            onChange={(e: any) => console.log(exercise)}
                            />
                            {exercise}
                        </div>
                )}
                <h3>Triceps</h3>
                {data.triceps.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox
                            value={formData.name}
                            onChange={(e: any) => console.log(exercise)} 
                            />
                            {exercise}
                        </div>
                )}
                <h3>Biceps</h3>
                {data.biceps.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox
                            value={formData.name}
                            onChange={(e: any) => console.log(exercise)} 
                            />
                            {exercise}
                        </div>
                )}
                <h3>Legs</h3>
                {data.legs.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox
                            value={formData.name}
                            onChange={(e: any) => console.log(exercise)} 
                            />
                            {exercise}
                        </div>
                )}
                <h3>Calfes</h3>
                {data.calfes.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox
                            value={formData.name}
                            onChange={(e: any) => console.log(exercise)}
                            />
                            {exercise}
                        </div>
                )}
                <h3>Abs</h3>
                {data.abs.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox
                            value={formData.name}
                            onChange={(e: any) => console.log(exercise)} 
                            />
                            {exercise}
                        </div>
                )}
                <Button type="submit" color="primary">
                            Create
                        </Button>
                </form>
        </div>
    )
}

export default WorkoutForm;