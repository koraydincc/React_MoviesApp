import React, { useContext, useState, useEffect } from 'react';
import { FilmContext } from '../App';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';

function RightPage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const { movies, filmAdi } = useContext(FilmContext);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTg2ZjU4NjZiZGUxYjI5NzczNzcyOWNjOWRmZGZmNSIsInN1YiI6IjY1MDAzNTc2MWJmMjY2MDBhYzc0YmFmMjY2MDBhYzc0YmY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gxi6R_SScCq8l6cxJ0f6_N7TPqTgB4KJOMgSl-HJtzE'
      }
    };

    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
      .then(response => response.json())
      .then(data => {
        // Gelen verileri uygun şekilde işleyin ve state'e atın
        setTrendingMovies(data.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h4>Trend Filmler</h4>
      {trendingMovies.map((movie) => {
        return (
          <div key={movie.id}>
            <NavLink className='TrendMovies' to={`/Movies/${movie.title}`} style={{ textDecoration: 'none' }}>
              <Avatar src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
              <div className='TrendMoviesSubtitle'>
                <p className='trendTitle'> {movie.title} ({movie.vote_average})</p>
              </div>
            </NavLink>
          </div>
        );
      })}

      <div>
        <h4>Film Robotu</h4>
      </div>
    </div>
  );
}

export default RightPage;
