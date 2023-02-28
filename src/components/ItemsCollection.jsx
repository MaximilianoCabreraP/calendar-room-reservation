import React from 'react'
import Items from './Items'

const ItemsCollection = ({ reuniones }) => {
  return (
    <>
      <h2 className='text-3xl'>Mis Reuniones</h2>
      {reuniones.map(reunion => (
        <Items key={reunion.id} reunion={reunion} />
      ))}
    </>
  )
}

export default ItemsCollection
