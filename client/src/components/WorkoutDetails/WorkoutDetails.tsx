import React from 'react';
import classnames from 'classnames';
import useStyles from './WorkoutDetails.styles';

import workoutList from '../../temp/workoutList.json';

import OptionsMenu from '../common/OptionsMenu';
import { Workout } from '../../lib/types';
import { Exercise } from '../../temp/interface';

interface RootState {
    workout: any
};

interface WorkoutDetailsProps {
    workout?: any
};

const WorkoutDetails = ({workout}: WorkoutDetailsProps) => {
    const classes = useStyles();

    const bodyParts = ["chest", "back", "arm", "triceps", "biceps", "legs", "calfes", "abs"];
    console.log(workout)
    return (
        <div className={classnames(classes.root)}>
            <span className={classnames(
                classes.container,
                classes.row,
                classes.title, 
                classes.bold
                )}
            >
                <span>{workout?.name}</span>
                <span><OptionsMenu workout={workout}/></span>
            </span>
            
            {/* Bodypart iteration */}
            {bodyParts.map((b: any, id:any) => {
                return (
                Boolean(workout.exercises?.length) && (
                    <div key={id}
                        className={classnames(
                            classes.container, 
                            classes.column,
                            classes.offset
                        )}
                    >
                        {!!workout.exercises.filter((w: Exercise) => w.bodyPart === b).length && <span className={classnames(classes.bold)}>{b}</span>}
                        <div>
                        {
                            workout.exercises.filter((ex: any) => ex.bodyPart === b).map((c: any, id: any) => (
                                <span 
                                    key={id}  
                                    className={classnames(
                                        classes.column,
                                        classes.offset
                                    )}
                                >
                                    {c.name}
                                </span>
                            ))
                        }
                        </div>
                    </div>
                )
                )
            })}
        </div>
    )
}

export default WorkoutDetails;