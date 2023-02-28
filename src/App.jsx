import React, { useState } from 'react'
import { gapi } from 'gapi-script'
import './App.css'
import ItemsCollection from './components/ItemsCollection'
import Login from './components/Login'
import Salas from './components/Salas'

function App () {
  const [loggued, setLoggued] = useState({ name: '', email: '' })
  const [reuniones, setReuniones] = useState([])
  const [salas, setSalas] = useState([])

  if (loggued.name === '') {
    return (
      <div className='App py-8 flex flex-col justify-center'>
        <h1 className='text-2xl font-bold mb-4'>React App with Google Calendar API!</h1>
        <Login gapi={gapi} setLoggued={setLoggued} setReuniones={setReuniones} setSalas={setSalas} />
      </div>
    )
  }

  return (
    <div className='py-8 flex flex-col justify-center text-4xl'>
      <h1 className='text-2xl font-bold mb-4'>Bienvenido </h1>
      <p>Loggued!</p>
      <p>{loggued.name}</p>
      <p>{loggued.email}</p>
      <hr />
      <ItemsCollection reuniones={reuniones} />
      <hr />
      <Salas salas={salas} />
    </div>
  )
}

export default App
