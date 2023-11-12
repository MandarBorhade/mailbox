import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <header>
        <NavLink activeClassName='active' to={'/'}>Unread</NavLink>
        <NavLink activeClassName='active' to={'/favorites'}>Favorites</NavLink>
        <NavLink activeClassName='active' to={'/read'}>Read</NavLink>
    </header>
  )
}

export default Nav