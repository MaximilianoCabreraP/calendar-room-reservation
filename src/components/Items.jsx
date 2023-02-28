import React from 'react'
import moment from 'moment'

const Items = ({ reunion }) => {
  const DATE_FORMAT = 'DD/MM/YYYY HH:mm'
  return (
    <ul>
      <li key={reunion.id}>
        <hr />
        <p>Reunión: {reunion.summary}</p>
        <p>Empieza: {moment(reunion.start.dateTime).format(DATE_FORMAT)}</p>
        <p>Finaliza: {moment(reunion.end.dateTime).format(DATE_FORMAT)}</p>
        <p>Location: {reunion.location}</p>
      </li>
    </ul>
  )
}

export default Items
