import React, { useContext } from 'react';
import { FilmContext } from '../App';
import BackButon from '@mui/icons-material/ArrowBackIos';
import NextButon from '@mui/icons-material/ArrowForwardIos';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

function HomePage() {
 
  const { movies, setPages, pages, setMovies } = useContext(FilmContext);

  const handleBackClick = () => {
    if (pages > 1) {
      setPages(pages - 1);
    } else {
      setPages(1);
    }
  }

  return (
    <div>
  
      <div className="movieList">
        <MovieCard></MovieCard>
        
      </div>
      <button onClick={handleBackClick}><BackButon /></button>
      {pages}
      <button onClick={() => setPages(pages + 1)}><NextButon /></button>
      <div></div>
    </div>
  );
}

export default HomePage;
