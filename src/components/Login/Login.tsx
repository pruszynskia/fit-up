import React, { useState } from 'react';
import useStyles from './Login.styles';
import classnames from 'classnames';

import {
    Button, 
    TextField
} from '@material-ui/core';

interface Login {
    handleCloseL();
};

export default function Login({handleCloseL}: Login) {

    const classes = useStyles();

    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("")

    const handleSubmit = (e) => {
        e.preventDefault();

        handleCloseL();
    };

    // Email


    // Password
    
    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit}>
                <div className={classnames(
                    classes.container,
                    classes.column
                    )}
                >
                    <span>Sign in</span>
                    <TextField
                        className={classes.offsetTop}
                        label="email" 
                        type="email"
                        variant="outlined" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField 
                        className={classes.offsetTop}
                        label="password" 
                        type="password"
                        variant="outlined" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <Button 
                        type="submit"
                        >
                        Login
                    </Button>
                </div>    
            </form>
        </div>
    )
}