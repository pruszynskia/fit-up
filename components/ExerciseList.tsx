import React from 'react';
import workoutList from '../temp/workoutList.json';
import {FitUpStyles} from '../styles/common';
import {
    Button
} from '@material-ui/core';

const ExerciseList = () => {
    const styles = FitUpStyles();
    const data = workoutList;
    return (
        <div>

            <h2>Chest</h2>
            {data.chest.map(bodyPart => {
                return (
                    <div
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                        <Button>add</Button>
                    </div>
                )
            })}
            
            <h2>Back</h2>
            {data.back.map(bodyPart => {
                return (
                    <div 
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                        <Button>add</Button>
                    </div>
                )
            })}
            
            <h2>Arms</h2>
            {data.arms.map(bodyPart => {
                return (
                    <div 
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                        <Button>add</Button>
                    </div>
                )
            })}
            
            <h2>Triceps</h2>
            {data.triceps.map(bodyPart => {
                return (
                    <div 
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                        <Button>add</Button>
                    </div>
                )
            })}
            <h2>Biceps</h2>
            {data.biceps.map(bodyPart => {
                return (
                    <div 
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                        <Button>add</Button>
                    </div>
                )
            })}
            <h2>Legs</h2>
            {data.legs.map(bodyPart => {
                return (
                    <div 
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                        <Button>add</Button>
                    </div>
                )
            })}
            <h2>Calfes</h2>
            {data.calfes.map(bodyPart => {
                return (
                    <div 
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                        <Button>add</Button>
                    </div>
                )
            })}
            <h2>Abs</h2>
            {data.abs.map(bodyPart => {
                return (
                    <div 
                        className={`
                        ${styles.container}
                        ${styles.row}
                        `}
                    >
                        <p>{bodyPart}</p>
                        <Button>add</Button>
                    </div>
                )
            })}


        </div>
    )
};

export default ExerciseList;