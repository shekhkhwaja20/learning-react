import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <nav>
        <h1>LOGO</h1>
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </ul>
    </nav>
  )
}

export default Nav