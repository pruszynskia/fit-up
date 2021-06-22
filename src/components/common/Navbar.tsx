import React, { useState } from 'react';
import { fitUpStyles } from '../../styles/common';
import {
  AppBar, 
  Tabs,
  Tab,
} from '@material-ui/core';
import CurrentWorkout from '../CurrentWorkout';
import EserciseList from '../ExerciseList';

function Navbar() {
  const styles = fitUpStyles()
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
        { selectedTab === 1 && <EserciseList />}
      </div>
    )
  }
  
  export default Navbar
