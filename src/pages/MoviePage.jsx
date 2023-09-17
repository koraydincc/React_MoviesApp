import React from 'react'
import { useParams } from 'react-router-dom'

function MoviePage() {

    const {filmAdi} = useParams()

  return (
    <div>
      <h2>{filmAdi}</h2>
    </div>
  )
}

export default MoviePage
