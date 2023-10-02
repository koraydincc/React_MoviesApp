import React, { useContext, useEffect, useState } from 'react';
import { FilmContext } from '../App';
import BackButon from '@mui/icons-material/ArrowBackIos';
import NextButon from '@mui/icons-material/ArrowForwardIos';
import MovieCard from '../components/MovieCard';
import NextIcon from '@mui/icons-material/ArrowForwardIos';
import BackIcon from '@mui/icons-material/ArrowBackIos';
import { NavLink } from 'react-router-dom';
import RightPage from '../components/RightPage'



function HomePage() {

  const { movies, setPages, pages } = useContext(FilmContext);
  const [editorMovies, setEditorMovies] = useState([]);
  const [moviesPageNext, setMoviesPageNext] = useState(5);
  const [moviesPageBack, setMoviesPageBack] = useState(0);





  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTg2ZjU4NjZiZGUxYjI5NzczNzcyOWNjOWRmZGZmNSIsInN1YiI6IjY1MDAzNTc2MWJmMjY2MDBhYzc0YmY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gxi6R_SScCq8l6cxJ0f6_N7TPqTgB4KJOMgSl-HJtzE'
      }
    };
    const updateData = fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&vote_average.gte=8', options)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const updatedEditorMovies = [...editorMovies, ...data.results];
  
    
      setEditorMovies(updatedEditorMovies);
    })
    .catch(err => console.error(err));
  

     
  }, []);
  
  
    
   
  

  const handleBackClick = () => {
    if (pages > 1) {
      setPages(pages - 1);
    } else {
      setPages(1);
    }
  }


  console.log(editorMovies)

  

  const handleNextShowClick = () => {
    setMoviesPageNext(moviesPageNext + 1);
    setMoviesPageBack(moviesPageBack + 1);

  }

  const handleBackShowClick = () => {
    if (moviesPageNext <= 5) {
      setMoviesPageNext(6);
    } else {
      setMoviesPageNext(moviesPageNext - 1);
      setMoviesPageBack(moviesPageBack - 1);
    }
  }

 



  return (
    
    <div>
      
      <div className='editor'>
        <h4>Editörün Seçimi</h4>
        <div className='editorMovie'>
          <button className='editorBtn' disabled={moviesPageNext === 5} onClick={handleBackShowClick}><BackIcon></BackIcon></button>
          {editorMovies.slice(moviesPageBack, moviesPageNext).map((movie) => {
            return (
              <NavLink  key={movie.id} className='navLinkEditor' to={`/Movies/${movie.title}`}>
              <div className='editorCard'>
                {movie.title}
                
                <img
                  className='img'
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                ></img>
              </div>
            </NavLink>
            );
          })}
          <button className='editorBtn' disabled={moviesPageNext === editorMovies.length} onClick={handleNextShowClick}><NextIcon></NextIcon></button>
        </div>
      </div>
      <div className="movieList">
        <MovieCard></MovieCard>
        <RightPage></RightPage>
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
