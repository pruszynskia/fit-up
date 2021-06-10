import React, { useState } from 'react';
import { FitUpStyles } from '../../../styles/common';
import {
  AppBar, 
  Tabs,
  Tab,
} from '@material-ui/core';
import FitUp from './FitUp';

function Navbar() {
  const styles = FitUpStyles()
  // Tabs
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event: any, newTab: any) => {
    setSelectedTab(newTab)
  }
    return (
      <div 
        className={`
        ${styles.container}
        ${styles.row}
        `}
      >
        <AppBar 
          className={`
          ${styles.row}
          `}
          position="static"
          >
            <h1>FitUp</h1>
          <Tabs 
            value={selectedTab}
            onChange={handleChange}
            >
            <Tab label="Workout" />
            <Tab label="Exercise List" />
            <Tab label="Calendar" />
          </Tabs>
        </AppBar>
        { selectedTab === 0 && <FitUp />}
      </div>
    )
  }
  
  export default Navbar
