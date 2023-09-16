import React from 'react';

function MovieCard(props) {
  return (
    <div className='movieCard'>
      <h3 className='movieTitle'>{props.movie.title}</h3>
      <img className='movieImage' src={`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`} alt={props.movie.title} />
    </div>
  );
}

export default MovieCard;
