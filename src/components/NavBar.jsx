import './NavBar.css'
import CartWidget from './CartWidget.jsx'

function NavBar()
{
    return (
        <>
            <h1>Simulador Tienda Havanna</h1>
            <nav>
                <ul>CATEGORIAS 🔽</ul>
                <div>CONTACTO</div>
                <div>AYUDA</div>
            </nav>
            <CartWidget />
        </>
    )
}

export default NavBar