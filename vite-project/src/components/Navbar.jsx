import React from 'react'
import './Navbar.css'

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <nav className="navbar glass-panel">
      <div className="hud-line-top"></div>
      
      <ul className="nav-group left">
        <li className="hud-font" onClick={() => scrollTo('home')}>SYSTEM_HOME</li>
        <li className="hud-font" onClick={() => scrollTo('dossiers')}>DOSSIERS</li>
      </ul>

      <div className="logo" onClick={() => scrollTo('home')}>
        <img src='./images/logo.png' alt="Avengers Logo" />
      </div>

      <ul className="nav-group right">
        <li className="hud-font" onClick={() => scrollTo('movies')}>ARCHIVES</li>
        <li className="hud-font status-indicator"><span className="pulse-dot"></span> SECURE_CONN</li>
      </ul>
    </nav>
  )
}

export default Navbar
