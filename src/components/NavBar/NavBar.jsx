import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget.jsx'
import { Link, NavLink } from 'react-router-dom'

export function NavBar()
{
    return (
        <>
            <nav>
                <Link to={'/'}>
                    Simulador Tienda Havanna
                </Link>
                <NavLink to={'/category/Alfajores'} className={({ isActive }) => isActive ? "active" : ""}>
                    Alfajores
                </NavLink>
                <NavLink to={'/category/Havannets'} className={({ isActive }) => isActive ? "active" : ""}>
                    Havannets
                </NavLink>
                <NavLink to={'/category/Galletitas'} className={({ isActive }) => isActive ? "active" : ""}>
                    Galletitas
                </NavLink>
                <NavLink to={'/category/Chocolates'} className={({ isActive }) => isActive ? "active" : ""}>
                    Chocolates
                </NavLink>
                <NavLink to={'/contact'} className={({ isActive }) => isActive ? "active" : ""}>
                    Contacto
                </NavLink>
            </nav>
            <CartWidget />
        </>
    )
}