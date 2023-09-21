import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import DownButton from '@mui/icons-material/ArrowDownward';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { FilmContext } from '../App';

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputText, setInputText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { movies } = useContext(FilmContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const searchMovies = (e) => {
    const targetValue = e.target.value.toLowerCase();
    setInputText(targetValue);
    const searchMovie = movies.filter((movie) =>
      movie.title.toLowerCase().includes(targetValue)
    );
    setSearchResults(searchMovie);
    if (targetValue === '') {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <nav className="navBar">
        <NavLink className="navLink" to="/">
          <Typography variant='button'>Film İzle</Typography>
        </NavLink>
        <NavLink className="navLink" to="/Best-movies">
          <Typography variant='button'>En İyiler</Typography>
        </NavLink>
        <NavLink className="navLink" to="/Movies-list">
          <Typography variant='button'>Listeler</Typography>
        </NavLink>
        <NavLink className="navLink">
          <Typography variant='button'>Seriler</Typography>
        </NavLink>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Türler
          <DownButton sx={{ fontSize: 'small' }} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <NavLink className='navLink' to='/Movies/Genre/Aksiyon'><MenuItem onClick={handleClose}>Aksiyon</MenuItem></NavLink>
          <NavLink className='navLink' to='/Movies/Genre/Komedi'><MenuItem onClick={handleClose}>Komedi</MenuItem></NavLink>
          <NavLink className='navLink' to='/Movies/Genre/Dram'><MenuItem onClick={handleClose}>Dram</MenuItem></NavLink>
        </Menu>
        <NavLink className="navLink">
          <Typography variant='button'>Tercihler</Typography>
        </NavLink>
        <NavLink className="navLink">
          <Typography variant='button'>İletişim</Typography>
        </NavLink>
        <input onChange={searchMovies} type="text" placeholder="Film ara.." />
        
          {searchResults.map((filteredMovie) => (
            <MenuItem key={filteredMovie.id} onClick={handleClose}>
              {filteredMovie.title}
            </MenuItem>
          ))}
      
      </nav>
    </div>
  );
}

export default NavBar;
