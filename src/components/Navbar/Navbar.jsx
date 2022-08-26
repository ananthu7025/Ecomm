import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useUserAuth } from "../../context/UserAuthContext"; 
import { useSelector } from "react-redux";
import {Badge} from '@material-ui/core'
import {ShoppingBasketOutlined} from '@material-ui/icons'
import DropDown from "../DropDown";
import ShowMore from "../ShowMore";
function NavBar() {
  const [click, setClick] = useState(false);
  const { logOut, user } = useUserAuth();
  const state = useSelector((state) => state.addItem);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            dress.com 
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/shop"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item" onClick={handleClick}>
              <ShowMore/>
            </li>
            {user ? (
             <li className="nav-item">
             <DropDown/>
           </li>
            ) : (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Login
                </NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink
                exact
                to="/cart"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                
               <Badge badgeContent={state.length} color="primary">
                <ShoppingBasketOutlined/>
              </Badge>
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
