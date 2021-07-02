import classnames from "classnames";
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'

import Button from '@material-ui/core/Button'
import WorkoutDetails from "../WorkoutDetails/WorkoutDetails";
import useStyles from './CurrentWorkouts.styles';

import DialogButton from "../common/DialogButton/DialogButton";

const CurrentWorkout = () => {
    const classes = useStyles();
    const router = useRouter();

    const data = useSelector((state: any) => state.workout)
    
    return (
    <div className={classnames(classes.root)}>
        <DialogButton />
    </div>
    )
  }
  
  export default CurrentWorkout