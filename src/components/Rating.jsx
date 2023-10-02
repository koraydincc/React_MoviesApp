import React, { useContext, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { FilmContext } from '../App';

export default function TemelDegerlendirme() {
  const [filmDegerleri, setFilmDegerleri] = useState({}); // Tüm film değerlerini bir nesne olarak tutar
  const { filmAdi, movies } = useContext(FilmContext);

  useEffect(() => {
    // Her film değiştiğinde, uygun değeri buluyoruz
    const secilenFilm = movies.find((film) => film.id === filmDegerleri);
    console.log(secilenFilm)
    if (secilenFilm) {
      setFilmDegerleri((oncekiDegerler) => ({
        ...oncekiDegerler,
        [secilenFilm.id]: secilenFilm.derece,
      }));
    }
  }, [filmAdi, movies]);


  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Film Değeri</Typography>
      <Rating
        name="film-derecesi"
        value={filmDegerleri[filmAdi] || 0} // Film adına göre değeri alın
        precision={0.5} // İstenirse yarı puanlı değerler için
        readOnly // Bu değeri sadece okunabilir yap
      />
    </Box>
  );
}
