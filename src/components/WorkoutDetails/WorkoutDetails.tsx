import React from 'react';
import classnames from 'classnames';
import useStyles from './WorkoutDetails.styles';

interface RootState {
    workout: any
};

interface WorkoutDetailsProps {
    workout?: any
};

const WorkoutDetails = ({workout}: WorkoutDetailsProps) => {
    const classes = useStyles();

    console.log("Workout print", workout);
    return (
        <div className={classnames(classes.root)}>
            <span className={classnames(classes.title, classes.bold)}>{workout?.name}</span>
            {/* Chest */}
            {workout?.chest.length && (
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
            {workout?.back.length && (
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
            {workout?.arms.length && (
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
            {workout?.triceps.length && (
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
            {workout?.biceps.length && (
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
            {workout?.legs.length && (
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
            {workout?.calfes.length && (
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
            {workout?.abs.length && (
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