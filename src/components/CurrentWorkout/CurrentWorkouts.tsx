import classnames from "classnames";
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'

import Button from '@material-ui/core/Button'
import WorkoutDetails from "../WorkoutDetails/WorkoutDetails";
import useStyles from './CurrentWorkouts.styles';

const CurrentWorkout = () => {
    const classes = useStyles();
    const router = useRouter();

    const data = useSelector((state: any) => state.workout)
    
    return (
    <div className={classnames(classes.root)}>
        {
            data.map((d: any) => (
                <Button onClick={() => console.log("test")}>
                    {d.name}
                </Button>
            ))
        }
    </div>
    )
  }
  
  export default CurrentWorkout