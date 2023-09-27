import React, { useContext } from 'react';
import { useState } from 'react';
import { FilmContext } from '../App';
import MovieCard from '../components/MovieCard';
import NextIcon from '@mui/icons-material/ArrowForwardIos';
import BackIcon from '@mui/icons-material/ArrowBackIos';
import { NavLink } from 'react-router-dom';
import Pagination from './Pagination';


function SimilarMovies() {
    const {movie} = useContext(FilmContext)
    const [moviesPageNext, setMoviesPageNext] = useState(2);
    const [moviesPageBack, setMoviesPageBack] = useState(0);



  const handleBackShowClick = () => {
    if (moviesPageNext <= 5) {
      setMoviesPageNext(6);
    } else {
      setMoviesPageNext(moviesPageNext - 1);
      setMoviesPageBack(moviesPageBack - 1);
    }
  }

  const handleNextShowClick = () => {
    setMoviesPageNext(moviesPageNext + 1);
    setMoviesPageBack(moviesPageBack + 1);
  }
  return (
    <div className='editor'>
      <h3>Benzer Filmler</h3>
      <div className='editorMovie'>
  
          {movie?.slice(moviesPageBack, moviesPageNext).map((movie) => {
            return (
              <NavLink  key={movie.id} className='navLinkEditor' to={`/Movies/${movie.title}`}>
              <div className='editorCard'>
                {movie?.title}
                <img
                  className='img'
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                ></img>
              </div>
            </NavLink>
            );
          })}
      
        </div>
        <FilmContext.Provider value={{movie, setMoviesPageNext, setMoviesPageBack}}>
            <Pagination></Pagination>
        </FilmContext.Provider>
       
    </div>
  );
}

export default SimilarMovies;
