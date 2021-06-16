import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Navbar } from './components/'
import { Home } from './views/'
import Spanish from './languages/es.json'

const language = Spanish

function App() {
  return (
    <>
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;900&display=swap'
        rel='stylesheet'
      />
      <Navbar buttonTxt={language.navbarButtons} />
      <Home />
    </>
  )
}

export default App
