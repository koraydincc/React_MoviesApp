import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import HomePage from './pages/HomePage';
import MovieCard from './components/MovieCard';


export const FilmContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [pages, setPages]=useState(1)

  useEffect(() => {
    const apiKey = '2e86f5866bde1b297737729cc9dfdff5';
    const apiUrl = 'https://api.themoviedb.org/3/discover/movie';

    axios.get(apiUrl, {
      params: {
        api_key: apiKey,
        page: pages,
    
      },
    })
    .then((response) => {
      setMovies(response.data.results);
    })
    .catch((error) => {
      console.error('API isteği başarısız oldu:', error);
    });
  }, [pages]);

  console.log(pages)
  console.log(movies)

  return (
    <div>
      <FilmContext.Provider value={{movies, pages, setPages, setMovies}}>
        <MovieCard></MovieCard>
  
      </FilmContext.Provider>

    </div>
  );
}

export default App;
