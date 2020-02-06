import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

const Header = props => {
    return(
        <Navbar sticky="top">
            <Nav>
                <Link className="header-link" to="/">Home</Link>
                <Link className="header-link" to="/cards">Cards</Link>
            </Nav>
        </Navbar>
    )
}

export default Header;