import React, { useState } from 'react';

import useStyles from './Navbar.styles';
import classNames from 'classnames';
import {
  AppBar,
  Button,
  Tabs,
  Tab,
  Dialog,
  DialogContent,
} from '@material-ui/core';

import CurrentWorkout from '../../CurrentWorkout/CurrentWorkouts';
import ExerciseList from '../../ExerciseList/ExerciseList';
import Calendar from '../../Calendar';

import Login from '../../Login';
import Register from '../../Register';


function Navbar() {
  const classes = useStyles();
  // Tabs
  const [openL, setOpenL] = useState<boolean>(false);
  const [openR, setOpenR] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event: any, newTab: any) => {
    setSelectedTab(newTab);
  }

  const handleOpenL = () => setOpenL(true);
  const handleCloseL = () => setOpenL(false);
  const handleOpenR = () => setOpenR(true);
  const handleCloseR = () => setOpenR(false);
    return (
      <div className={classes.root}>
        <AppBar 
          
          position="static"
        >
          <div className={classNames(
            classes.container,
          )}>
            <h1>FitUp</h1>
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              >
              <Tab label="Current Workout" />
              <Tab label="Exercise List" />
              <Tab label="Calendar" />
            </Tabs>
            <div>
              <Dialog 
                  open={openL} 
                  onClose={handleCloseL}
                  >
                <DialogContent>
                  <Login 
                    handleCloseL={handleCloseL}
                  />
                </DialogContent>
              </Dialog>
              <Button
                className={classes.offset}
                variant="contained"
                color="secondary"
                size="small"
                onClick={handleOpenL}
                >
                Logg In
              </Button>
              
              <Dialog 
                  open={openR} 
                  onClose={handleCloseR}
              >
                <DialogContent>
                  <Register 
                    handleCloseR={handleCloseR}
                    />
                </DialogContent>
              </Dialog>
              <Button
                className={classes.offset}
                variant="contained"
                color="secondary"
                size="small"
                onClick={handleOpenR}
                >
                Register
              </Button>
            </div>
          </div>
        </AppBar>
        { selectedTab === 0 && <CurrentWorkout />}
        { selectedTab === 1 && <ExerciseList />}
        { selectedTab === 2 && <Calendar />}
      </div>
    )
  }
  
  export default Navbar
