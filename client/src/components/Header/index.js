import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header>
            <div>
                <Link to="/" className="text-decoration-none text-body">
                    <h1>Optimus Crime</h1>
                </Link>
                <p><b>Dedicated to the past, present, & future victims of crime.</b></p>
                <div className="double-border"></div>
                <div className="d-flex flex-row justify-content-between">
                    <span className="english-font px-3 py-2"></span>
                    <nav className="d-flex flex-row justify-content-end">
                    {Auth.loggedIn() ? (
                        <>
                        {/* <Link to="/profile">Me</Link> */}
                        <a href="/" className="px-3 py-2 text-uppercase" onClick={logout}>
                            Logout
                        </a>
                        </>
                    ) : (
                        <>
                        <Link to="/login" className="px-5 py-2 text-uppercase">Login</Link>
                        <Link to="/signup" className="px-5 py-2 text-uppercase">Join us!</Link>
                        </>
                    )}
                </nav>
                </div>
                
                <div className="single-border"></div>
            </div>
        </header>
    )
};

export default Header;