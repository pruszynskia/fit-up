import {useState} from 'react'
import useStyles from './Navbar.styles';
import {
  AppBar,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'
import Login from '../../Login'
import Register from '../../Register'

function Navbar() {
  const classes = useStyles();
  // Tabs
  const [openL, setOpenL] = useState<boolean>(false);
  const [openR, setOpenR] = useState<boolean>(false);

  const handleOpenL = () => setOpenL(true);
  const handleCloseL = () => setOpenL(false);
  const handleOpenR = () => setOpenR(true);
  const handleCloseR = () => setOpenR(false);

    return (
        <AppBar position="static" >
          <div className={classes.root}>
            <h1>FitUp</h1>
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
    )
  }
  
  export default Navbar
