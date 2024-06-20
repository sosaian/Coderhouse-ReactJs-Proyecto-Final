import './CartWidget.css'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'

export function CartWidget()
{
    const { cart, showCartProducts } = useContext(CartContext)
    const [ quantity, setQuantity ] = useState()

    useEffect(() => {
        const cartQuantity = cart.reduce((accumulator, product) => accumulator + product.quantity, 0);
        
        setQuantity(cartQuantity === 0 ? undefined : cartQuantity)
    }, [cart])


    return (
        <>
            <button onClick={showCartProducts}>🛒<span>{quantity}</span></button>
        </>
    )
}