import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import workoutList from '../../src/temp/workoutList.json';
import initialState from '../../src/temp/initialState.json'

import {
    Button,
    Checkbox,
    TextField
} from '@material-ui/core';

interface WorkoutFormProps {
    handleForm: Function
}

const WorkoutForm = ({handleForm}: WorkoutFormProps) => {


    const data = workoutList;
    let [formData, setFormData] = useState<any>(initialState);

    /**
     * 
     */ 

    // Form
    const dispatch = useDispatch();
    const dataSelect = useSelector((state: any) => state);


 

    const handleChange = (event: React.ChangeEvent<{value: unknown; name: string}>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value as string

        })
    }
    
    return (
        <div>
            <form onSubmit={(e: any) => handleForm(e, formData)}>
                <TextField
                    label="Title"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}

                    />
                <h3>Chest</h3>
                {data.chest.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox
                            name={exercise}
                            onChange={(e: any) => {
                                if(e.target.checked) setFormData({
                                    ...formData,
                                    chest: [...formData.chest, {
                                        name: exercise
                                    }]
                                })
                                else {
                                    setFormData({
                                        ...formData,
                                        chest: formData.chest.filter((ex: any) => ex.name !== exercise)
                                    })
                                }
                            }}
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