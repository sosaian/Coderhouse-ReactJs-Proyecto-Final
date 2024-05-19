import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer/>
      </main>
      <footer>
        REACT JS | Coderhouse | Pre-entrega 1 | Ian Sosa
      </footer>
    </>
  )
}

export default App
