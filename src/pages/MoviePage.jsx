import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FilmContext } from '../App'
import Typography from '@mui/material/Typography';

function MoviePage() {

    const {filmAdi} = useParams()
    const {movies, setMovies} = useContext(FilmContext)

    

     


    const movie = movies.find((movie)=>movie.title === filmAdi)

    
  return (
    <div>
        <div className='MovieCard'>
            <Typography  variant='h4'>{filmAdi}</Typography>
            <div className="MovieContent">
              <div className="MovieContentLeft">
             
                <img alt='movie_picture' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} />
                <button>Fragmanı izle</button>
              </div>
              <div className="MovieContentRight">
                   <Typography className='Typography' type='inherit' variant="button" display="block" gutterBottom>
                      IMDB {movie?.vote_average}
                  </Typography>
                  <Typography className='Typography' type='inherit' variant="button" display="block" gutterBottom>
                      Original Language: {movie?.original_language}
                  </Typography>
                   <br />
                  <Typography  variant='subtitle2'>
                    {movie?.overview}
                  </Typography>
                  <Typography className='releaseDate' variant='subtitle2'>
                    Çıkış Tarihi: {movie?.release_date}
                  </Typography>
                 
              </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default MoviePage
