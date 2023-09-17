import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav>
        <NavLink to='/'>Film İzle</NavLink>
        <NavLink to='/Best-movies'>En İyiler</NavLink>
        <NavLink to='/Movies-list'>Listeler</NavLink>
      </nav>
    </div>
  )
}

export default Header
