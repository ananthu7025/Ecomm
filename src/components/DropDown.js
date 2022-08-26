import * as React from 'react';
import { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Menu,
    MenuItem,
  } from "@material-ui/core";
import './Navbar/NavBar.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
import { useUserAuth } from '../context/UserAuthContext'; 
export default function DropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const [popup, setPopup] = useState(false);

  const handleClickOpen = () => {
    setPopup(true);
   

  };
  const handleClickClose = () => {
    setPopup(false);
    
    console.log(popup);
  };
  return (
    <div>
      <Button
       
        onClick={handleClick}
        className="nav-item"
      >
        My Account <span style={{marginLeft:"5px"}}><i class="fa fa-caret-down" aria-hidden="true"></i></span>
      </Button>
      <Menu
      style={{top:"50px"}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link className='link' to="/profile">Profile</Link></MenuItem>
        <MenuItem onClick={handleClose}>WishList</MenuItem>
        <MenuItem ><Button onClick={handleClickOpen}>Logout</Button>
               
                  
                
               <Dialog
                 open={popup}
                 onClose={handleClickClose}
                 aria-labelledby="alert-dialog-title"
                 aria-describedby="alert-dialog-description"
               >
                 <DialogTitle id="alert-dialog-title">
                   {"Are You Sure"}
                 </DialogTitle>
                 <DialogContent>
                   <DialogContentText id="alert-dialog-description">
                    Are you sure do you want to Logout
                   </DialogContentText>
                 </DialogContent>
                 <DialogActions>
                   <Button onClick={handleClickClose}>Cancel</Button>
                   <Button onClick={handleLogout} autoFocus>
                     Logout
                   </Button>
                 </DialogActions>
               </Dialog>
             </MenuItem>
      </Menu>
    </div>
  );
}
