import React from 'react'
import './styles/Item.css'

export const Item = ({peli, title, poster_path, overview, vote_average}) => {

  return (
    <div className='pelipopu__container'>
      <div className='pelipopu__titulo'>
        <h3>{peli.title}</h3>
        <p>{peli.vote_average}</p>
      </div>
      <div className="pelipopu__wrapper">
        <img src={`https://image.tmdb.org/t/p/w300/${peli.poster_path}`}  alt={title} />
      </div>
      <div className="pelipopu__overview">
        <h3>Resumen:</h3>
        <p>{peli.overview}</p>
      </div>
    </div>
  )
}
