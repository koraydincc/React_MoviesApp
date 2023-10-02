import * as React from 'react';
import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FilmContext } from '../App';
import { useContext } from 'react'
import { useState } from 'react';

function CustomPagination() {
  const { movie, setMoviesPageNext,setMoviesPageBack, moviesPageNext, pages, moviesPageBack } = useContext(FilmContext);
     


  

  const handleChangePage = (event, page) => {

    if (page > movie.length) {
      setMoviesPageNext(page);
      setMoviesPageBack(page - 1);
    } else if (page < movie.length) {
      
      setMoviesPageNext(page + 1);
      setMoviesPageBack(page - 1);
    }
    else if (page == movie.length) {
      setMoviesPageNext(page)
      setMoviesPageBack(page-1)

    }
    console.log(page)
  };


  return (
    <Stack spacing={2}>
      <MuiPagination
        count={movie.length}
        size="large"
        page={pages}
        onChange={handleChangePage}
      />
    </Stack>
  );
}

export default CustomPagination;
