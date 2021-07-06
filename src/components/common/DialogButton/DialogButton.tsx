import React, { useState } from 'react';
import {useRouter} from 'next/router';
import {useSelector} from 'react-redux';

import useStyles from './DialogButton.styles';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import WorkoutDetails from '../../WorkoutDetails'

// interface DialogButtonProps {
//      children: React.ReactNode
// }
// 

// <DialogButton label="Click">
//      <div>
//          content
//      </div>
// </DialogButton>

interface DialogButtonProps {
    label?: string;
    children?: React.ReactNode
}

const DialogButton = ({label, children}: DialogButtonProps) => {
    const classes = useStyles();

    //Dialog
        const [open, setOpen] = useState(false);
    
        const handleClickOpen = () => {
            setOpen(true);
        };
    
        const handleClose = () => {
            setOpen(false);
        };
    
    //Router
        const router = useRouter();
    
    //Data

        
    return (
        <div className={classnames(classes.root, classes.column)}>
                    <div key={label} className={classnames(classes.container)}>
                    <Button onClick={handleClickOpen}
                    >
                        {label}
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                    >
                        {children}
                    </Dialog>
                    </div>
        </div>
    )
}

export default DialogButton