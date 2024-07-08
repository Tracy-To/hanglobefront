import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav className="mx-auto bg-red-500 rounded-3xl py-6 px-10 flex flex-wrap items-center">
      <Link to="/" className="text-white text-4xl font-bold tracking-wider hover:scale-110 transition-transform duration-300 ease-in-out hanglobe-link">
        HanGlobe
      </Link>
      <div className="flex space-x-8">
        <Link to="/" className="text-white text-3xl tracking-wide">
          Home
        </Link>
        <Link to="/new_articles" className="text-white text-3xl tracking-wide">
          New Articles
        </Link>
        <Link to="/explore" className="text-white text-3xl tracking-wide">
          Explore
        </Link>
        <Link to="/post" className="text-white text-3xl tracking-wide">
          Post
        </Link>
      </div>
    </nav>
  )
}

export default NavBar