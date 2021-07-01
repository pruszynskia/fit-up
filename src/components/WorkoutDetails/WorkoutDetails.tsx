import React, {useState} from 'react';
import classnames from 'classnames';
import useStyles from './WorkoutDetails.styles';

import DialogButton from '../common/DialogButton/DialogButton';
import {
    Button
} from '@material-ui/core';

import { useSelector } from 'react-redux';

interface RootState {
    workout: any
}

interface WorkoutDetailsProps {
    data?: any
}

const WorkoutDetails = ({data}: WorkoutDetailsProps) => {
    const [something, setSomething] = useState(false);
    const classes = useStyles();

    const a = 5;


    console.log("formData print", data);
    return (
        <div className={classnames(classes.root)}>
         {/* <Button onClick={handleOpen}>{data.name}</Button>
         <Dialog></Dialog> */}
            <DialogButton label={data.name}>
                <div>
                    content
                </div>
            </DialogButton>
        </div>
    )
}

export default WorkoutDetails;