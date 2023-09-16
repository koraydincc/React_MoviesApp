import * as React from 'react';
import { useContext } from 'react';
import { FilmContext } from '../App';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList() {
  
    const { movies, setPages, pages, setMovies } = useContext(FilmContext);

  return (
    <ImageList sx={{ width: 500, height: 600, margin:'20px' }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Film Listesi</ListSubheader>
      </ImageListItem>
      {movies.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            srcSet={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.release_date}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

