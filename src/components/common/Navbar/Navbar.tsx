import React, { useState } from 'react';
import useStyles from './Navbar.styles';
import {
  AppBar, 
  Tabs,
  Tab,
} from '@material-ui/core';
import CurrentWorkout from '../../CurrentWorkout/CurrentWorkouts';
import ExerciseList from '../../ExerciseList/ExerciseList';
import Calendar from '../../Calendar';

function Navbar() {
  const classes = useStyles();
  // Tabs
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event: any, newTab: any) => {
    setSelectedTab(newTab)
  }
    return (
      <div 

      >
        <AppBar 
          
          position="static"
          >
            <h1>FitUp</h1>
          <Tabs 
            value={selectedTab}
            onChange={handleChange}
            >
            <Tab label="Current Workout" />
            <Tab label="Exercise List" />
            <Tab label="Calendar" />
          </Tabs>
        </AppBar>
        { selectedTab === 0 && <CurrentWorkout />}
        { selectedTab === 1 && <ExerciseList />}
        { selectedTab === 2 && <Calendar />}
      </div>
    )
  }
  
  export default Navbar
