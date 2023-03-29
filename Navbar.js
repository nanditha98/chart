// import React, { useState } from "react";
// import "./Navbar.css";

// function Navbar() {


// const user = localStorage.getItem("token")
// console.log("user",user);
// const [active, setActive] = useState("nav__menu");
// const [icon, setIcon] = useState("nav__toggler");


// const navToggle = () => {
// if (active === "nav__menu") {
// setActive("nav__menu nav__active");
// } else setActive("nav__menu");
// if (icon === "nav__toggler") {
// setIcon("nav__toggler toggle");
// } else setIcon("nav__toggler");
// };

// return (
// <nav className="nav">
// <a href="#" className="nav__brand">
// {
// localStorage.getItem("token",user.token)
// }
// </a>
// <ul className={active}>
// <li className="nav__item">
// <a href="/home" className="nav__link"> Home </a>
// </li>
// <li className="nav__item">
// <a href="#" className="nav__link"> About </a>
// </li>
// <li className="nav__item">
// <a href="#" className="nav__link"> Portfolio </a>
// </li>
// <li className="nav__item">
// <a href="#" className="nav__link"> Skills </a>
// </li>
// <li className="nav__item">
// <a href="#" className="nav__link"> Contact </a>
// </li>
// </ul>
// <div onClick={navToggle} className={icon}>\
// <div className="line1"></div>
// <div className="line2"></div>
// <div className="line3"></div>
// </div>
// </nav>
// );
// }

// export default Navbar;




import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;