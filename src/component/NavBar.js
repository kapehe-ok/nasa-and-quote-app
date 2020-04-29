import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <NavLink className="link" to="/" >Take Me Home</NavLink>
            </ul>
        </div>
    )
}

