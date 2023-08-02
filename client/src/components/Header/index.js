import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <div>
                <h1>Optimus Crime</h1>
                <Link to="/">
                    <h1>Optimus Crime</h1>
                </Link>
                <div className="double-border"></div>
                <nav>
                    <div>
                        Today's Date
                    </div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </nav>
                <div className="double-border"></div>
            </div>
        </header>
    )
};

export default Header;