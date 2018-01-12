import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./images/blockhead-logo.svg";
import SearchBoxContainer from "./containers/SearchBoxContainer";


const TopNavbar = (props) => {
  let navItems = "";
  if (props.showNavItems) {
    navItems = (
              <div>
                <Nav pullLeft>
                  <SearchBoxContainer />
                </Nav>
                <Nav pullRight>
                  <Link to="/coins"><Navbar.Text>My Portfolio</Navbar.Text></Link>
                  <Link to="/main"><Navbar.Text>Main</Navbar.Text></Link>
                  <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
                </Nav>
              </div>
              );

  }
  return (
    <Navbar inverse collapseOnSelect>
      <img src={logo} className="logo" alt="logo" />
      <Navbar.Collapse>
        <Nav pullRight>
          
        </Nav>
        {navItems}
      </Navbar.Collapse>
    </Navbar>
  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
