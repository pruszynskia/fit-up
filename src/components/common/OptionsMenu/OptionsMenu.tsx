import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import useStyles from './OptionsMenu.styles';
import classNames from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import WorkoutForm from '../../WorkoutForm/WorkoutForm';

interface RootState {
    workout: any,
    visibilityFilters: {
        editWorkoutFilter: boolean
    }
}

export default function OptionsMenu ({workout}:any) {
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
            type: 'DELETE_WORKOUT',
            payload: id
        });
    }
    
    // Edit workout button
    const [openEditWorkout, setOpenEditWorkout] = useState(false);

    const handleEditOpen = (data: any) => {
        setOpenEditWorkout(true);
        dispatch({
            type: 'SET_VISIBILITY_FILTER',
            payload: {
                editJobOfferFilter: true
            }
        })
    };

    const handleEditClose = () => {
        setOpenEditWorkout(false);
        forceUpdate();
    };


    console.log("w", workout)
    
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
                onClick={() => handleDelete(workout.id)}
            >
                Remove
            </MenuItem>
            <MenuItem
                onClick={() => handleEditOpen(workout.id)}
            >
                Edit
            </MenuItem>
            <Dialog 
                    aria-labelledby={"transition-dialog-title"+workout.id}
                    open={openEditWorkout}
                    onClose={handleEditClose}
            >
                <DialogContent>
                    <div>
                        <WorkoutForm 
                            handleClose={setOpenEditWorkout}
                            data={workout}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </Menu>
    </div>
    )
}


