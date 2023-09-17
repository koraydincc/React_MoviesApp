import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import DownButton from '@mui/icons-material/ArrowDownward';

function Header() {
   
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div>
      <nav className='navBar'>
        <NavLink className='navLink' to='/'>Film İzle</NavLink>
        <NavLink className='navLink' to='/Best-movies'>En İyiler</NavLink>
        <NavLink className='navLink' to='/Movies-list'>Listeler</NavLink>
        <NavLink className='navLink'>Seriler</NavLink>
        <button onClick={toggleMenu}><NavLink className='navLinkDown'>Türler<DownButton sx={{fontSize:'small'}}></DownButton></NavLink></button>
         {isOpen && (
          <ul>
            <li>Bilim Kurgu</li>
            <li>Aksiyon</li>
          </ul>
         )}
         
        <NavLink className='navLink'>Tercihler</NavLink>
        <NavLink className='navLink'>İletişim</NavLink>
        <input type='text' placeholder='Film ara..'></input>
      </nav>
    </div>
  )
}

export default Header
