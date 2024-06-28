import './App.css'
import { NavBar } from './components/NavBar/NavBar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartComponentContext } from './context/CartContext.jsx'
import { CartItemListContainer } from './components/CartItemListContainer/CartItemListContainer.jsx'
import { Checkout } from './components/Checkout/Checkout.jsx'

function App() {
  const WIP_MESSAGE = "Página aún en construcción..."
  const ERROR_MESSAGE = "¡UPS! Esa página no existe..."

  return (
    <CartComponentContext>
      <BrowserRouter>
        <header>
          <NavBar/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/contact" element={<h2>{WIP_MESSAGE}</h2>} />
            <Route path="/cart" element={<CartItemListContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h2>{ERROR_MESSAGE}</h2>} />
          </Routes>
        </main>
        <footer>
          REACT JS | Coderhouse | Proyecto Final | Ian Sosa
        </footer>
      </BrowserRouter>
    </CartComponentContext>
  )
}

export default App