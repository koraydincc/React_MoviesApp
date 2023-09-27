import * as React from 'react';
import MuiPagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { FilmContext } from '../App';
import { useContext } from 'react';

function CustomPagination() {
  const { movie, setMoviePageNext, setMoviePageBack, pages } = useContext(FilmContext);

  // Her sayfada kaç film gösterileceğini belirleyin (örneğin 2)
  const itemsPerPage = 2;

  // İlgili sayfadaki filmleri hesaplayın
  const startIdx = (pages - 1) * itemsPerPage;
  const endIdx = pages * itemsPerPage;
  const currentPageMovies = movie.slice(startIdx, endIdx);

  // Sayfa sayısını hesaplayın
  const pageCount = Math.ceil(movie.length / itemsPerPage);

  const handleChangePage = (event, page) => {
    if (page > pages) {
      setMoviePageNext(page);
    } else if (page < pages) {
      setMoviePageBack(page);
    }
  };

  return (
    <Stack spacing={2}>
      <MuiPagination
        count={pageCount}
        size="large"
        page={pages}
        onChange={handleChangePage}
      />
    </Stack>
  );
}

export default CustomPagination;
