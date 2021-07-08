import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import useStyles from './WorkoutForm.styles';
import classnames from 'classnames';

import workoutList from '../../temp/workoutList.json';
import initialState from '../../temp/initialState.json'

import {
    Button,
    Checkbox,
    TextField
} from '@material-ui/core';

interface WorkoutFormProps {
    handleClose: Function;
}

const WorkoutForm = ({handleClose}: WorkoutFormProps) => {
    const classes = useStyles();

    const bodyParts = ["chest", "back", "arm", "triceps", "biceps", "legs", "calfes", "abs"];
    const exercises: Array<{name: string; bodyPart: string}> = workoutList;

    // const data
    let [formData, setFormData] = useState<any>(initialState);

    const dispatch = useDispatch();
    const dataSelect = useSelector((state: any) => state);

    const handleChange = (event: React.ChangeEvent<{value: unknown; name: string}>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value as string

        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        dispatch({
            type: 'ADD_WORKOUT',
            payload: formData
        });
    };
    const handleForm = async (e: any) => {
        handleSubmit(e);
        handleClose()
    }

    return (
        <div className={classes.root}>
            <form onSubmit={(e: any) => handleForm(e)}>
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
                                <Checkbox
                                    name={ex.name}
                                    onChange={(e: any) => {
                                        if(e.target.checked) setFormData({
                                            ...formData,
                                            [b]: [...formData[b], {
                                                name: ex.name
                                            }]
                                        })
                                        else {
                                            setFormData({
                                                ...formData,
                                                [b]: formData[b].filter((ex: any) => ex.name !== exercises)
                                            })
                                        }
                                    }}
                                />
                                <span>{ex.name}</span>
                            </div>
                        ))}
                    </div>
                    )
                })}

                <Button type="submit" color="primary">
                            Create
                        </Button>
                </form>
        </div>
    )
}

export default WorkoutForm;