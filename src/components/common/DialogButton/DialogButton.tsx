import React, { useState } from 'react';
import {useRouter} from 'next/router';

import useStyles from './DialogButton.styles';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

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