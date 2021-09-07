import {useState} from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import {makeStyles } from '@material-ui/core/styles'



import CurrentWorkout from './CurrentWorkout'
import ExerciseList from './ExerciseList'
import Calendar from './Calendar'

const useStyles = makeStyles(theme => ({
    root: {},
    offset: {}
}))

export default function Main() {
    const classes = useStyles()


    const [selectedTab, setSelectedTab] = useState(0);
    const handleChange = (event: any, newTab: any) => {
      setSelectedTab(newTab);
    }
  

    return (
        <div>
        <Tabs
              value={selectedTab}
              onChange={handleChange}
              >
              <Tab label="Current Workout" />
              <Tab label="Exercise List" />
              <Tab label="Calendar" />
            </Tabs>

            <div>
            { selectedTab === 0 && <CurrentWorkout />}
            { selectedTab === 1 && <ExerciseList />}
            { selectedTab === 2 && <Calendar />}
            </div>
            </div>
    )
}
