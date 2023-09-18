import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { FilmContext } from '../App'

function MoviePage() {

    const {filmAdi} = useParams()
    const {movies, setMovies} = useContext(FilmContext)

    console.log(movies)

    const movie = movies.find((movie)=>movie.title === filmAdi)
    console.log(movie)

  return (
    <div>
        <div className='MovieCard'>
            <h3>{filmAdi}</h3>
            <div className="MovieContent">
              <div className="MovieContentLeft">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                <button>Fragmanı izle</button>
              </div>
              <div className="MovieContentRight"></div>
            </div>
            
        </div>
        
    </div>
  )
}

export default MoviePage
