import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList';

export const Populares = () => {

  const [populares, setPopulares]=useState([])
  const [cargando, setCargando]=useState(true)

  const urlpopulares = 'https://api.themoviedb.org/3/movie/popular?api_key=b4b97eab5b971833d349d799c1366215&language=en-US&page=1';

  const getPopulares = async () => {
    const data = await fetch(urlpopulares);
    const peliPopulares = await data.json();
    setTimeout(() => {
      console.log(peliPopulares);
      setPopulares(peliPopulares.results)
      setCargando(false)
  }, 2000);
  }

  useEffect(() => {
    getPopulares()
  },[])

  return (
    <>
        <h2>Peliculas Populares</h2>
      {cargando ? 
        <h2>Cargando..</h2> : 

        <ItemList peliPo={populares} />
      }
    </>
  )
}
