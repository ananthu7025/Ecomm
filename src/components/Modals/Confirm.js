import * as React from 'react';
import {Button,Dialog,DialogContent,DialogTitle,DialogActions,DialogContentText} from "@material-ui/core"
import { NavLink } from 'react-router-dom';

export default function Confirm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Proceed To Checkout
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          You must sign in to continue checking out.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Continue Shopping</Button>
          <Button  >
          <NavLink to="/login" >Login</NavLink>
        
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
