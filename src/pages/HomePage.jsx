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
  

  const handleBackClick = () => {
    if (pages > 1) {
      setPages(pages - 1);
    } else {
      setPages(1);
    }
  }
   
  const editMovies = () => {
    if (pages < 20) {
      const bestEditorMovies = movies.filter((movie) => movie.vote_average > 8);
      setEditorMovies([...editorMovies, ...bestEditorMovies]);
      setPages(pages + 1);

    } else {
      return false
    }
  };

  const displayMovies = () => {
     editorMovies.filter((movie,index)=>{})
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
         {editorMovies.map((movie, index) => {
          
           if (index > 0 ) {
            
             return (
               <div key={movie.id}>
                 <h3>{movie.title}</h3>
                 <p>{movie.overview}</p>
                
           
               </div>
             );
            
           }
           return false
         })}
         <button></button>
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
