import React from 'react'
import './Navbar.css'
import nikeLogo from "../assets/nikelogo.svg"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src = {nikeLogo} alt="Logo" />
        <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navbar
