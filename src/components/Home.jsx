import React, { useEffect, useState } from 'react'
import { StarRating } from './StarRating';
import './styles/Home.css';

export const Home = () => {
  const [pelicula, setPelicula]=useState([])
  const [buscar, setBuscar]= useState('')

  const handleOnChange = (e) => {
    e.preventDefault();
    setBuscar(e.target.value);

    //funcion para traer los datos de la API
    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=b4b97eab5b971833d349d799c1366215&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&query=${e.target.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setPelicula(data.results)
          } else {
            setPelicula([]);
          }
          console.log(data);
        })    
    },500);
  }
  
  useEffect(() => {
    fetch()
  }, [])

  return (
    <div className='container-home'>
      <h1>Buscar Peliculas</h1>
      <div className='input-peliculas'>
        <form >
          <input 
            type="text"  
            placeholder="Buscar pelicula"
            value={buscar}
            onChange={handleOnChange}
          />
        </form>
      </div>
      <div className='wrapper-img'>
            {
              pelicula.map(bus => (
                <div className='item-container'>
                  <StarRating />
                  <div className='item-titulo'>
                    <h3>{bus.title}</h3>
                    <p>{bus.vote_average}</p>
                  </div>
                <li key={bus.id}>
                  <div className='item-img'>
                    <img src={`https://image.tmdb.org/t/p/w300/${bus.poster_path}`} alt={bus.title} />
                  </div>
                </li>
                <div className='item_overview'>
                  <h3>Resumen:</h3>
                  <p>{bus.overview}</p>
                </div>
                </div>
              ))
            }
      </div>
    </div>
  )
}
