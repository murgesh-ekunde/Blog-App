import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Header() {
  return (
    <header>
        <Link to="/" className="logo">My Blogs</Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
  )
}

export default Header