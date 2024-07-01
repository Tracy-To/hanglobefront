import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav>
      <Link to="/" style={{ margin: '10px' }}>Home</Link>
      <Link to="/new_articles" style={{ margin: '10px' }}>New Articles</Link>
      <Link to="/explore" style={{ margin: '10px' }}>Explore</Link>
      <Link to="/post" style={{ margin: '10px' }}>Post</Link>
    </nav>
  )
}

export default NavBar