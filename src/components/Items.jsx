import React from 'react'

const Items = ({ items }) => {
  return (
    <>
      <div>Items</div>
      <ul>
        {items.map((item) => (
          item.status !== 'cancelled' && item.start.dateTime >= new Date().toISOString() &&
            <li key={item.id}>
              <hr />
              <p>{item.summary}</p>
              <p>Empieza: {new Date(item.start.dateTime).toLocaleDateString('es-ES')}</p>
              <p>Finaliza: {new Date(item.end.dateTime).toLocaleDateString('es-ES')}</p>
            </li>
        ))}
      </ul>
    </>
  )
}

export default Items
