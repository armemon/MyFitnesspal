import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import React, {  useState } from "react";
import {  useNavigate } from "react-router-dom";
// import logo from '../../../public/myfitness.png';




function CollapsibleExample({ user, ...props }) {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
  

    const navigate = useNavigate();
    const handleLogout = (e) => {
      e.preventDefault();
      signOut(auth).then(() => {
        setIsLoggedIn(false);
        console.log("User logged out successfully!");
        navigate("/MyFitnesspal");
      });
    };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{color: "red"}}>
      <Container>
              <Navbar.Brand href="#home"><img src="https://raw.githubusercontent.com/armemon/MyFitnesspal/gh-pages/myfitness.png" alt="logo" style={{ height: "50px", padding: "0", margin: "0" }}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse>
              <Navbar.Brand className="ms-auto">{ props.values.name ? `Welcome - ${props.name}` : user.displayName ? `Welcome - ${user.displayName}` : "nii"}</Navbar.Brand>
                  
                  <Nav className="ms-auto">
                      <Nav.Link className="justify-content-end" style={{ color: "white" }} eventKey={2} onClick={handleLogout}>Logout
         
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;