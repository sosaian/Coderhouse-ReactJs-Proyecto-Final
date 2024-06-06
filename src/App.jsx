import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Contacto" element={<h2>Página aún en construcción...</h2>} />
          <Route path="*" element={<h2>¡UPS! Esa página no existe...</h2>} />
        </Routes>
      </main>
      <footer>
        REACT JS | Coderhouse | Pre-entrega 2 | Ian Sosa
      </footer>
    </BrowserRouter>
  )
}

export default App
