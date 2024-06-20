// create a navigation for navigating to home, profile and about us page. Use NavLinks

import React from 'react'

import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/about-us">About Us</NavLink></li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
}
