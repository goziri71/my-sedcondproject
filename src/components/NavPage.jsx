import React from 'react'
import { Link } from 'react-router-dom';
import '../css/style.css'

function NavPage() {
  return (
    <nav className='navigation'>
        <Link to="/">HOME</Link>
        <Link to="/NavPage">SHOP</Link>
        <Link to="/BLOCK">BLOG</Link>
        <Link to="/CONTACT">CONTACT</Link>
    </nav>

  )
}

export default NavPage;