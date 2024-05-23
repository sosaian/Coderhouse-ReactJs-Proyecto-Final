import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting={"¡UPS! Parece que no hay productos disponibles ahora..."}/>
      </main>
      <footer>
        REACT JS | Coderhouse | Pre-entrega 1 | Ian Sosa
      </footer>
    </>
  )
}

export default App
