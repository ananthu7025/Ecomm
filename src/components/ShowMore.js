import * as React from 'react';
import {
    Button,
    Menu,
    MenuItem,
  } from "@material-ui/core";
import './Navbar/NavBar.css'
import { Link } from 'react-router-dom';
export default function ShowMore() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
       
        onClick={handleClick}
        className="nav-item"
      >
        More <span style={{marginLeft:"5px"}}><i class="fa fa-caret-down" aria-hidden="true"></i></span>
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
        <MenuItem onClick={handleClose}><Link className='link' to="/contact">Contact Us</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className='link' to="/blog">Blog</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className='link' to="/about">About Us</Link></MenuItem>
      </Menu>
    </div>
  );
}
