import React, { useContext } from 'react';
import {FilmContext} from '../App'; // Doğru dosya yolunu kullanın
import BackButon from '@mui/icons-material/ArrowBackIos';
import NextButon from '@mui/icons-material/ArrowForwardIos';



function HomePage() {
  const { movies, setPages,pages,setMovies } = useContext(FilmContext);

  const handleBackClick = () => {
    if (pages > 1 ) {
      setPages(pages-1)
    }
    else{
      setPages(1)
    }
}

  return (
    <div>
      <ul>
         {movies.map((movie)=>{
          return (
            <li key={movie.id}>{movie.title}</li>
          )
         })}
      </ul>
      <button onClick={handleBackClick}><BackButon></BackButon></button>
       {pages}
      <button onClick={()=>setPages(pages+1)}><NextButon></NextButon></button>
      
    </div>
  );
}

export default HomePage;
