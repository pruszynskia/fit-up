import React, { useState } from 'react';
import {useRouter} from 'next/router';
import {useSelector} from 'react-redux';

import useStyles from './DialogButton.styles';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

// interface DialogButtonProps {
//      children: React.ReactNode
// }
// 

// <DialogButton label="Click">
//      <div>
//          content
//      </div>
// </DialogButton>

const DialogButton = ({label, chidren}: any) => {
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
        const data = useSelector((state: any) => state.workout)

    return (
        <div className={classnames(classes.root)}>
            <div>
                {
                data.map((d: any) => (
                    <Button onClick={() => console.log("test")}>
                        {d.name}
                    </Button>
                ))
                }
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                {children}
            </Dialog>
        </div>
    )
}

export default DialogButton