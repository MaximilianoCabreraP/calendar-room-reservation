
// import { useState } from 'react'
// import Items from './Items'

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY

const Login = ({ gapi, setLoggued, setReuniones, setSalas }) => {
  // const [items, setItems] = useState([])

  function authenticate () {
    return gapi.auth2.getAuthInstance()
      .signIn({ scope: 'https://www.googleapis.com/auth/calendar' })
      .then(function () {
        console.log('Sign-in successful')
        const profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile()
        const name = profile.getName()
        const email = profile.getEmail()
        setLoggued({ name, email })
      },
        function (err) { console.error('Error signing in', err) })
  }
  function loadClient () {
    gapi.client.setApiKey(API_KEY)
    return gapi.client.load('https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest')
      .then(function () {
        execute()
      },
        function (err) { console.error('Error loading GAPI client for API', err) })
  }

  function execute () {
    return gapi.client.calendar.events.list({
      calendarId: 'maximiliano@bidcom.com.ar'
    }).then(function (response) {
      filterItems(response.result.items)
    }, function (err) { console.error('Execute error', err) })
  }
  function filterItems (items) {
    const rooms = items.filter(item => item.location !== null || item.location !== undefined ? item.location : null).map(room => (console.log(room), room.location))

    const uniqueRooms = [...new Set(rooms)]
    console.log(uniqueRooms)
    // setSalas(uniqueRooms)
    items = items.filter(item => item.status !== 'cancelled' && item.end.dateTime >= new Date().toISOString())
    setReuniones(items)
  }

  gapi.load('client:auth2', function () {
    gapi.auth2.init({ client_id: CLIENT_ID })
  })

  return (
    <>
      <button onClick={() => authenticate().then(loadClient)}>authorize and load</button>
      {/* {items.length > 0 && <Items items={items} />} */}
    </>
  )
}

export default Login
