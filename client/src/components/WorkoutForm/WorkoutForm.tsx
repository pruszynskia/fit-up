import React, { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import useStyles from './WorkoutForm.styles';
import classnames from 'classnames';

import workoutList from '../../temp/workoutList.json';
// import initialState from '../../temp/initialState.json'

import {
    Button,
    Checkbox,
    TextField
} from '@material-ui/core';

import {v4} from 'uuid'
import { addWorkoutTest, editWorkoutTest } from '../../redux/actions';

interface WorkoutFormProps {
    handleClose: Function;
    data?: any;
}

const WorkoutForm = ({handleClose, data}: WorkoutFormProps) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const edit = Boolean(data)


    const bodyParts = ["chest", "back", "arms", "triceps", "biceps", "legs", "calfes", "abs"];
    const exercises: Array<{name: string; bodyPart: string}> = workoutList;
    const initialState = {
        id: v4(),
        name: "",
        exercises: []
    }
    // const data
    let [formData, setFormData] = useState<any>(data ? data : initialState);


    const handleChange = (event: React.ChangeEvent<{value: unknown; name: string}>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value as string
        })
    }

    

    // const handleSubmit = (e: any) => {
    //     e.preventDefault();

    //     if(edit) {
    //         dispatch({
    //             type: 'EDIT_WORKOUT',
    //             payload: formData
    //         });
    //     } else {
    //         dispatch({
    //             type: 'ADD_WORKOUT',
    //             payload: formData
    //         });
    //     };
    //     handleClose();
    // };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if(edit) {
            editWorkoutTest(dispatch, formData)
        } else {
            console.log(formData)
            addWorkoutTest(dispatch, formData)
        }
        handleClose();
    };

    return (
        <div className={classes.root}>
            <span>{edit ? "EDIT WORKOUT" : "ADD WORKOUT"}</span>
            <form onSubmit={(e: any) => handleSubmit(e)}>
                <TextField
                    label="Title"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                {/* Bodypart iteration */}
                {bodyParts.map((b: any, id:any) => {
                    return (
                        
                    <div key={id} 
                        className={classnames(
                            classes.container,
                            classes.column
                            )}
                    >

                        {/* Bodypart name */}
                        <span className={classnames(classes.title, classes.bold )}>{b}</span>
                        {exercises.filter((ex: any) => ex.bodyPart === b).map((ex: any, idx:any) => (
                            <div key={idx}>
                                {
                                <Checkbox
                                    checked={formData.exercises.map((el: any) => el.name).includes(ex.name)}
                                    name={ex.name}
                                    onChange={(e: any) =>{
                                        if(e.target.checked) {
                                            setFormData({
                                            ...formData,
                                            exercises: [...formData.exercises, {name: ex.name, bodyPart: b}]
                                        })
                                  
                                    }
                                        else {
                                            setFormData({
                                                ...formData,
                                                exercises: formData.exercises.filter((ex_: any) => ex_.name !== ex.name)
                                            })
                                        }
                                    }}
                                />
                }
                                <span>{ex.name}</span>
                            </div>
                        ))}
                    </div>
                    )
                })}

                <Button type="submit" color="primary">
                    {edit ? "EDIT" : "ADD"}
                </Button>
            </form>
        </div>
    )
}

export default WorkoutForm;