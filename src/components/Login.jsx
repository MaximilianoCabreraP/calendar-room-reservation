
import { gapi } from 'gapi-script'
import { useState } from 'react'
import Items from './Items'

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY

const Test = () => {
  const [items, setItems] = useState([])

  function authenticate() {
    return gapi.auth2.getAuthInstance()
      .signIn({ scope: 'https://www.googleapis.com/auth/calendar' })
      .then(function() { console.log('Sign-in successful') },
        function(err) { console.error('Error signing in', err) })
  }
  function loadClient() {
    gapi.client.setApiKey(API_KEY)
    return gapi.client.load('https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest')
      .then(function() { execute() },
        function(err) { console.error('Error loading GAPI client for API', err) })
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.calendar.events.list({
      calendarId: 'maximiliano@bidcom.com.ar'
    })
      .then(function(response) {
        // Handle the results here (response.result has the parsed body).
        console.log('Response', response)
        setItems(response.result.items)
      },
      function(err) { console.error('Execute error', err) })
  }
  gapi.load('client:auth2', function() {
    gapi.auth2.init({ client_id: CLIENT_ID })
  })

  return (
    <>
      <button onClick={() => authenticate().then(loadClient)}>authorize and load</button>
      {items.length > 0 && <Items items={items} />}
    </>
  )
}

export default Test
