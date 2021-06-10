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
      <Navbar buttonTxt={language.navbarButtons} />
      <Home />
    </>
  )
}

export default App
