import React from 'react'
import logo from "/logo.jpeg"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className= {`container`}>
      <nav>
        <img width={50} height={50} src = {logo} alt="" />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
