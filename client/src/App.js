import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Footer } from './components/'
import { Home, Location } from './views/'
import { BrowserRouter as Router, Switch, Route, link } from 'react-router-dom'

function App() {
  return (
    <>
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;900&display=swap'
        rel='stylesheet'
      />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
        integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
      />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route expact path='/location'>
            <Location />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
