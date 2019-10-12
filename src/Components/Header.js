import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return(
        <>
            <Navbar bg="success" variant="dark">
                <Navbar.Brand href="https://kishorecodes.github.io/short-news/">
                <img
                    alt="logo"
                    src="https://purepng.com/public/uploads/thumbnail//google-stadia-logo-hd4.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {'Short News'}
                </Navbar.Brand>
            </Navbar>
        </>
    )
}
export default Header;