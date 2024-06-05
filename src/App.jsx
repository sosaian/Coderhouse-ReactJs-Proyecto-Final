import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"¡UPS! Parece que no hay productos disponibles ahora..."}/>} />
        </Routes>
      </main>
      <footer>
        REACT JS | Coderhouse | Pre-entrega 2 | Ian Sosa
      </footer>
    </BrowserRouter>
  )
}

export default App
