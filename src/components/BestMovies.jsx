import React, { useContext } from 'react'
import { FilmContext } from '../App'
import BackButon from '@mui/icons-material/ArrowBackIos';
import NextButon from '@mui/icons-material/ArrowForwardIos';
import MovieCard from '../components/MovieCard';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import PlayButton from '@mui/icons-material/PlayCircleOutline';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';

function BestMovies() {
 
  
  const [moviesPageNext, setMoviesPageNext] = useState();
  const [moviesPageBack, setMoviesPageBack] = useState(0);

  const {movies, pages, setPages} = useContext(FilmContext)  

  const bestMovies = movies.filter((bestMovies)=>bestMovies.vote_average > 7 )



  const handleChangePage = (event, page) => {

    setPages(page)

    if (page > bestMovies.length) {
      setMoviesPageNext(page);
      setMoviesPageBack(page - 1);
    } else if (page < bestMovies.length) {
      
      setMoviesPageNext(page + 1);
      setMoviesPageBack(page - 1);
    }
    else if (page == bestMovies.length) {
      setMoviesPageNext(page)
      setMoviesPageBack(page-1)

    }
    console.log(page)
  };


 console.log(bestMovies)

  return (
    <div className='BestMovieCard'>
      <ImageList className='moviesList' sx={{width: 600, height: '100%', margin:'20px' }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">En İyi Film Listesi</ListSubheader>
          </ImageListItem>
          {bestMovies.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                srcSet={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt={item.title}
                loading="lazy"
              />
              <Link to={`/Movies/${item.title}`}>
              <ImageListItemBar
                title={item.title}
                subtitle={item.release_date}
                actionIcon={
                  <PlayButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                    
                  
                  >
                    <InfoIcon />
                  </PlayButton>
                  
                }
              /></Link>
              
            </ImageListItem>
            
        
          ))}
           
        </ImageList>
        <div className="actions">
        <Pagination count={bestMovies.length} color="primary"
        onChange={handleChangePage}
        page={pages} 
        size='large'/>
        </div>
    </div>
  )
}

export default BestMovies
