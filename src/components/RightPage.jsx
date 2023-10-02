import React, { useContext } from 'react';
import { FilmContext } from '../App';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';

function RightPage() {
  const { movies, filmAdi } = useContext(FilmContext);

  const voteCount = movies.filter((movie) => {
    return movie.vote_count > 1500;
  });

  console.log(voteCount);

  return (
    <div>
      <h4>Trend Filmler</h4>
      {voteCount.map((movie) => (
        <div>
        <NavLink  className='TrendMovies'  to={`/Movies/${movie.title}`} key={movie.id} style={{ textDecoration: 'none' }}>
        <Avatar src={`https:/image.tmdb.org/t/p/original/${movie.poster_path}`} />
        <div className='TrendMoviesSubtitle'>
        <p  className='trendTitle'> {movie.title} ({movie.vote_average})</p>
      
        </div>
        

        </NavLink>
        </div>
      ))}
    </div>
  );
}

export default RightPage;
