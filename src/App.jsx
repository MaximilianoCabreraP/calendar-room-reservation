import React from 'react'
import './App.css'
import Login from './components/Login'

function App() {
  return (
    <div className='App py-8 flex flex-col justify-center'>
      <h1 className='text-2xl font-bold mb-4'>React App with Google Calendar API!</h1>
      <Login />
    </div>
  )
}

export default App
