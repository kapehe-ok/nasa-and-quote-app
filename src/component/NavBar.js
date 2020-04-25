import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <NavLink className="link" to="/" exact activeClassName="active">Nasa Photo</NavLink>
                <NavLink className="link" to="/quote"activeClassName="active">Quotes</NavLink>
            </ul>
        </div>
    )
}

