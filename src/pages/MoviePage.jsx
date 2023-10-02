import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FilmContext } from '../App';
import Typography from '@mui/material/Typography';
import SimilarMovies from '../components/SimilarMovies';
import { Rating } from '@mui/material';
import Tema from '../components/Tema'

function MoviePage() {
  const { filmAdi } = useParams();
  const { movies, setMovies } = useContext(FilmContext);

  let movie; 


  if (movies && movies.length > 0) {
    movie = movies.find((movie) => movie.title === filmAdi);
  }

  const selectedMovieGenreIds = movie?.genre_ids;

  const similarMovies = movies.filter((movie) => {
    return movie.genre_ids.some((genreId) => selectedMovieGenreIds?.includes(genreId));
  });

  



  return (
    <div className='moviePage'>
             
      <div className='MovieCard'>
        <Typography variant='h4'>{filmAdi}</Typography>
        <div className='MovieContent'>
          <div className='MovieContentLeft'>
            <img alt='movie_picture' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} />
            <button>Fragmanı izle</button>
          </div>
          <div className='MovieContentRight'>
            <Typography className='Typography' type='inherit' variant='button' display='block' gutterBottom>
              IMDB {movie?.vote_average}
            </Typography>
            <Typography className='Typography' type='inherit' variant='button' display='block' gutterBottom>
              Original Language: {movie?.original_language}
            </Typography>
            <br />
            <Typography variant='subtitle2'>{movie?.overview}</Typography>
            <Typography className='releaseDate' variant='subtitle2'>
              Çıkış Tarihi: {movie?.release_date}
            
            </Typography>
            <Typography variant='subtitle2'>
            Popularity: {movie?.popularity}
            </Typography>
            <Typography variant='subtitle2'>
              18+ Yaş sınırı: {movie?.adult ? '18+ Yaş sınırı mevcuttur ' : 'Herkes tarafından izlenebilir'}
            </Typography>
            <FilmContext.Provider value={{movies, setMovies, filmAdi}}>
              <Rating></Rating>
            </FilmContext.Provider>
         
          </div>
        </div>
        
      </div>
      <FilmContext.Provider value={{ movie: similarMovies }}>
        <SimilarMovies></SimilarMovies>
      </FilmContext.Provider>
    </div>
  );
}

export default MoviePage;
