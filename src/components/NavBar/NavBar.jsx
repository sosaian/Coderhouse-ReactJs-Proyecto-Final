import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.jsx'

function NavBar()
{
    return (
        <>
            <h1>Simulador Tienda Havanna</h1>
            <nav>
                <button>Alfajores</button>
                <button>Havannets</button>
                <button>Galletitas</button>
                <button>Chocolates</button>
                <button>Contacto</button>
                <CartWidget />
            </nav>
        </>
    )
}

export default NavBar