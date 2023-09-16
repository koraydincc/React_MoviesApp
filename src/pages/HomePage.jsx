import React, { useContext } from 'react';
import { FilmContext } from '../App';
import BackButon from '@mui/icons-material/ArrowBackIos';
import NextButon from '@mui/icons-material/ArrowForwardIos';
import MovieCard from '../components/MovieCard';

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
        {movies.map((movie) => (
          <div className='Card' key={movie.id}>
            <MovieCard movie={movie} title={movie.title} />
          </div>
        ))}
      </div>
      <button onClick={handleBackClick}><BackButon /></button>
      {pages}
      <button onClick={() => setPages(pages + 1)}><NextButon /></button>
      <div></div>
    </div>
  );
}

export default HomePage;
