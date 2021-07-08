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
    const exercises: Array<{name: string; bodyPart: string}> = workoutList;

    return (
        <div className={classnames(classes.root)}>
            <span className={classnames(classes.title, classes.bold)}>
                <span>{workout?.name}</span>
                <span><OptionsMenu /></span>
            </span>

            {/* Chest */}
            {Boolean(workout?.chest.length) && (
                <div 
                    className={classnames(
                        classes.container, 
                        classes.column,
                        classes.offset
                    )}
                >
                    <span className={classnames(classes.bold)}>Chest</span>
                    <div>
                    {
                        workout?.chest.map((c: any, id: any) => (
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
            )}

            {/* Back */}
            {Boolean(workout?.back.length) && (
                <div 
                    className={classnames(
                        classes.container, 
                        classes.column,
                        classes.offset
                    )}
                >
                    <span className={classnames(classes.bold)}>Back</span>
                    <div>
                    {
                        workout?.back.map((c: any, id: any)=> (
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
            )}

            {/* Arms */} 
            {Boolean(workout?.arms.length) && (
                <div 
                    className={classnames(
                        classes.container, 
                        classes.column,
                        classes.offset
                    )}
                >
                    <span className={classnames(classes.bold)}>Arms</span>
                    <div>
                    {
                        workout?.arms.map((c: any, id: any)=> (
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
            )}

            {/* Triceps */}
            {Boolean(workout?.triceps.length) && (
                <div 
                    className={classnames(
                        classes.container, 
                        classes.column,
                        classes.offset
                    )}
                >
                    <span className={classnames(classes.bold)}>Triceps</span>
                    <div>
                    {
                        workout?.triceps.map((c: any, id: any)=> (
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
            )}

            {/* Biceps */}
            {Boolean(workout?.biceps.length) && (
                <div 
                    className={classnames(
                        classes.container, 
                        classes.column,
                        classes.offset
                    )}
                >
                    <span className={classnames(classes.bold)}>Biceps</span>
                    <div>
                    {
                        workout?.biceps.map((c: any, id: any)=> (
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
            )}

            {/* Legs */}
            {Boolean(workout?.legs.length) && (
                <div 
                    className={classnames(
                        classes.container, 
                        classes.column,
                        classes.offset
                    )}
                >
                    <span className={classnames(classes.bold)}>Legs</span>
                    <div>
                    {
                        workout?.legs.map((c: any, id: any)=> (
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
            )}

            {/* Calfes */}
            {Boolean(workout?.calfes.length) && (
                <div 
                    className={classnames(
                        classes.container, 
                        classes.column,
                        classes.offset
                    )}
                >
                    <span className={classnames(classes.bold)}>Calfes</span>
                    <div>
                    {
                        workout?.calfes.map((c: any, id: any)=> (
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
            )}

            {/* Abs */}
            {Boolean(workout?.abs.length) && (
                <div 
                    className={classnames(
                        classes.container, 
                        classes.column,
                        classes.offset
                    )}
                >
                    <span className={classnames(classes.bold)}>Abs</span>
                    <div>
                    {
                        workout?.abs.map((c: any, id: any)=> (
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
            )}
        </div>
    )
}

export default WorkoutDetails;