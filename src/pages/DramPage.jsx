import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
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

function ActionMovies() {



  const {movies, setMovies, pages, setPages} = useContext(FilmContext)
  
  console.log(movies)

  const GenreMovies = movies.filter((movie)=> movie.genre_ids.includes(18))


  console.log(GenreMovies)

  const handleBackClick = () => {
    if (pages > 1) {
      setPages(pages - 1);
    } else {
      setPages(1);
    }
  }

  return (
    <div className='GenreCard'>
   
      <ImageList className='GenreCard' sx={{width: 600, height: '100%', margin:'20px' }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Dram Filmleri</ListSubheader>
          </ImageListItem>
          {GenreMovies.map((item) => (
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
            <button onClick={handleBackClick}><BackButon /></button>
            {pages}
            <button onClick={() => setPages(pages + 1)}><NextButon /></button>
          </div>
   
      
    </div>
  )
}

export default ActionMovies
