import React, { useContext, useEffect } from 'react';
import { FilmContext } from '../App';
import BackButon from '@mui/icons-material/ArrowBackIos';
import NextButon from '@mui/icons-material/ArrowForwardIos';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';
import { useState } from 'react';

function HomePage() {
 
  const { movies, setPages, pages, setMovies, inputText } = useContext(FilmContext);
  const [editorMovies, setEditorMovies] = useState([])
  const [moviesPage, setMoviesPage] = useState(5)
  

  const handleBackClick = () => {
    if (pages > 1) {
      setPages(pages - 1);
    } else {
      setPages(1);
    }
  }
   
  const editMovies = () => {
    if (pages < 20) {
      const bestEditorMovies = movies.filter((movie) => movie.vote_average > 7.5);
      setEditorMovies([...editorMovies, ...bestEditorMovies]);
      setPages(pages + 1);

    } else {
      return false
    }
  };




  const handleNextShowClick = () => {
         setMoviesPage(moviesPage + 1)
  }

  const handleBackShowClick = () => {
    if (moviesPage <= 5) {
      setMoviesPage(6)
    }
    else{
      setMoviesPage(moviesPage - 1)
    }

    console.log(moviesPage)
   
  }
    
  useEffect(()=>{
    editMovies()
   
  },[pages])

  console.log(editorMovies)
  

  return (
    <div>
      <div className='editor'>
       <h4>Editörün Seçimi</h4>
       <div className='editorMovie'>
        <button onClick={handleBackShowClick}>Geri</button>
         {editorMovies.slice(0,moviesPage).map((movie)=>{
            return (
              <div>{movie.title}</div>
            )
         })}
         <button onClick={handleNextShowClick}>İleri</button>
       </div>
    </div>

      
      
      <div className="movieList">
        <MovieCard></MovieCard>
      
      </div>
      <div className="actions">
         <button onClick={handleBackClick}><BackButon /></button>
         {pages}
         <button onClick={() => setPages(pages + 1)}><NextButon /></button>
      </div>
  
    </div>
  );
}

export default HomePage;
