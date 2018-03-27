import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
        <span><Link to='/'>About</Link></span>
        <span><Link to='/ico'>ICO</Link></span>
        <span><Link to='/demo'>Demo</Link></span>
        <span><Link to='/whitepaper'>Whitepaper</Link></span>
        <span><Link to='/contact'>Contact</Link></span>
    </nav>
  </header>
)

export default Header
