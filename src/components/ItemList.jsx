import React from 'react'
import { Item } from './Item'
import './styles/Item.css'

export const ItemList = ({peliPo}) => {
  return (
    <div className='itemlist-container'>
      {
        peliPo.map(peliPopulares => <Item key={peliPopulares.id} peli={peliPopulares} />)
      }
    </div>
  )
}
