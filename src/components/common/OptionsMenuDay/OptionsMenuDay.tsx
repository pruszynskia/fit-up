import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import useStyles from './OptionsMenuDay.styles';
import classNames from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import WorkoutDayForm from '../../WorkoutDayForm';


export default function OptionsMenuDay ({workouts}:any) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [, updateState] = useState({});
    const forceUpdate = React.useCallback(() => updateState({}), []);

    // Menu
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Remove workout button    
    const handleDelete = (id: any) => {
        dispatch({
            type: 'DELETE_WORKOUT_DAY',
            payload: id
        });
    }

   
    
    // Edit workout button
    const [openEditWorkout, setOpenEditWorkout] = useState(false);

    const handleEditOpen = (data: any) => {
        setOpenEditWorkout(true);

    };

    const handleEditClose = () => {
        setOpenEditWorkout(false);
        forceUpdate();
    };
    
    return (
        <div className={classes.root}>
        <IconButton
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick}
        >
            <span className="material-icons">more_vert</span>
        </IconButton>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
                onClick={() => handleDelete(workouts.id)}
            >
                Remove
            </MenuItem>
            <MenuItem
                onClick={() => handleEditOpen(workouts.id)}
            >
                Edit
            </MenuItem>
            <Dialog 
                    aria-labelledby={"transition-dialog-title"+workouts.id}
                    open={openEditWorkout}
                    onClose={handleEditClose}
            >
                <DialogContent>
                    <div>
                        <WorkoutDayForm 
                            handleCloseF={setOpenEditWorkout}
                            data={workouts}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </Menu>
    </div>
    )
}


