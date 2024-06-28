import './CartItemList.css'
import { CartItem } from '../CartItem/CartItem'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function CartItemList()
{
    const { cart } = useContext(CartContext)

    return(
        <ul id="cartItemList">
            {cart.map((product) =>
                <CartItem key={product.id}
                    id={product.id}
                    img={product.imgThumbnail}
                    name={product.name}
                    price={product.price}
                    stock={product.stock}
                    quantity={product.quantity} />)}
        </ul>
    )
}