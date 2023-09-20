import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import BestMovies from './components/BestMovies';
import ListMovies from './components/ListMovies';
import NavBar from './components/NavBar';
import MoviePage from './pages/MoviePage';
import AksiyonPage from './pages/AksiyonPage';
import KomediPage from './pages/KomediPage'

export const FilmContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);

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



  return (
    <div className='App'>
      <NavBar></NavBar>
      <FilmContext.Provider value={{ movies, pages, setPages, setMovies }}>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} />
          <Route path='/Best-movies' element={<BestMovies></BestMovies>} />
          <Route path='/Movies-list' element={<ListMovies></ListMovies>} />
          <Route path='/Movies/:filmAdi' element={<MoviePage></MoviePage>} />
          <Route path='/Movies/Genre/Aksiyon' element={<AksiyonPage></AksiyonPage>}></Route>
          <Route path='/Movies/Genre/Komedi' element={<KomediPage></KomediPage>}></Route>
        </Routes>
      </FilmContext.Provider>
    </div>
  );
}

export default App;
