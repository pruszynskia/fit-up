import React, { useState } from 'react';

import workoutList from '../../src/temp/workoutList.json';

import {
    Checkbox,
    TextField
} from '@material-ui/core';

const WorkoutForm = ( setFormData: any ) => {
    const data = workoutList;

    return (
        <div>
            <form>
                <TextField
                    label="Title"
                >

                </TextField>
                <h3>Chest</h3>
                {data.chest.map((exercise: any, id: any) => 
                        <div key={id}>
                            <Checkbox
                            onChange={(e: any) => {setFormData}}
                            />
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