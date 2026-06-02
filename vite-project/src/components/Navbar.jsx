import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-group left">
        <li>Home</li>
        <li>Characters</li>
        <li>Movies</li>
      </ul>

      <div className="logo">
        <img src='./images/logo.png' alt="Avengers Logo" />
      </div>

      <ul className="nav-group right">
        <li>Series</li>
        <li>Comics</li>
        <li>Shop</li>
      </ul>
    </nav>
  )
}

export default Navbar
