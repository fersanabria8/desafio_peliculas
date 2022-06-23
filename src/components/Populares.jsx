import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList';


export const Populares = () => {

  const [populares, setPopulares]=useState([])
  const [cargando, setCargando]=useState(true)

  const urlpopulares = 'https://api.themoviedb.org/3/movie/popular?api_key=b4b97eab5b971833d349d799c1366215&language=en-US&page=1';

  // const IMG_POPU = 'https://image.tmdb.org/t/p/w300';

  const getPopulares = async () => {
    const data = await fetch(urlpopulares);
    const peliPopulares = await data.json();
    console.log(peliPopulares);
    setPopulares(peliPopulares.results)
    // .catch(err => console.log(err))
    // .finally(() => setCargando(false))
    setCargando(false)

  }

  useEffect(() => {
    getPopulares()
  },[])

  return (
    <>
        <h3>Peliculas Populares</h3>
      {cargando ? 
        <h2>Cargando..</h2> : 

        <ItemList peliPo={populares} />
    
      }
    </>
  )
}
