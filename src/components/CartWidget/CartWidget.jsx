import './CartWidget.css'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export function CartWidget()
{
    const { cart } = useContext(CartContext)
    const [ quantity, setQuantity ] = useState()

    useEffect(() => {
        const cartQuantity = cart.reduce((accumulator, product) => accumulator + product.quantity, 0);
        setQuantity(cartQuantity === 0 ? undefined : cartQuantity)
    }, [cart])


    return (
        <>
            <Link to={'/cart'}>
                <button>🛒<span>{quantity}</span></button>
            </Link>
        </>
    )
}