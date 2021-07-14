import React from 'react';
import classnames from 'classnames';
import useStyles from './WorkoutDetails.styles';

import workoutList from '../../temp/workoutList.json';

import OptionsMenu from '../common/OptionsMenu';

interface RootState {
    workout: any
};

interface WorkoutDetailsProps {
    workout?: any
};

const WorkoutDetails = ({workout}: WorkoutDetailsProps) => {
    const classes = useStyles();

    const bodyParts = ["chest", "back", "arm", "triceps", "biceps", "legs", "calfes", "abs"];

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
                Boolean(workout[b]?.length) && (
                    <div key={id}
                        className={classnames(
                            classes.container, 
                            classes.column,
                            classes.offset
                        )}
                    >
                        <span className={classnames(classes.bold)}>{b}</span>
                        <div>
                        {
                            workout[b].map((c: any, id: any) => (
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

            {/* Chest */}
           
        </div>
    )
}

export default WorkoutDetails;