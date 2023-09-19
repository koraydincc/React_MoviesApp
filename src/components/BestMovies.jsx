import React, { useContext } from 'react'
import { FilmContext } from '../App'
import BackButon from '@mui/icons-material/ArrowBackIos';
import NextButon from '@mui/icons-material/ArrowForwardIos';
import MovieCard from '../components/MovieCard';


function BestMovies() {

  
  const {movies, setMovies,pages,setPages} = useContext(FilmContext)  

  const bestMovies = movies.filter((bestMovies)=>bestMovies.vote_average > 7 )
  console.log(bestMovies)

  const handleBackClick = () => {
    if (pages > 1) {
      setPages(pages - 1);
    } else {
      setPages(1);
    }
  }

  return (
    <div>
       <h2>En İyi Filmler</h2>
       {bestMovies.map((movie)=>(
        <li key={movie.id}>
          {movie.title}
        </li>
       ))}
        <div className="actions">
         <button onClick={handleBackClick}><BackButon /></button>
         {pages}
         <button onClick={() => setPages(pages + 1)}><NextButon /></button>
      </div>
    </div>
  )
}

export default BestMovies
