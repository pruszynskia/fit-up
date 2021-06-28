import {useState} from 'react'
import classnames from 'classnames'
import {makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.primary.dark
    }
}))


import ExerciseList from "./ExerciseList";
import WorkoutForm from "./WorkoutForm";
const WorkoutDetails = () => {
    const [something, setSomething] = useState(false)
    const classes = useStyles()

    const a = 5;
    return (
        <div>
            <button onClick={() => setSomething(true)}>click</button>
            <span className={classnames("material-icons", {
                [classes.root]: something
            })} >fingerprint</span>
        </div>
    )
}

export default WorkoutDetails;