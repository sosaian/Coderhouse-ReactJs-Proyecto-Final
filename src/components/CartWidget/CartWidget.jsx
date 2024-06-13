import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function CartWidget()
{
    const { cart, showCartProducts } = useContext(CartContext)

    return (
        <>
            <button onClick={showCartProducts}>🛒<span>{cart.length}</span></button>
        </>
    )
}