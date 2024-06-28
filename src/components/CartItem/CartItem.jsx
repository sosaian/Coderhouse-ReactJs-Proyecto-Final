import './CartItem.css'
import { ItemQuantitySelector } from '../ItemQuantitySelector/ItemQuantitySelector.jsx'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'


export function CartItem({ id, img, name, price, stock, quantity })
{
    const [productQuantity, setproductQuantity] = useState(quantity)
    const { modifyProductQuantity, removeFromCart } = useContext(CartContext)

    const handleClick = (mode) => {
        if (mode === "plus" && stock > productQuantity)
        {
            modifyProductQuantity(id, productQuantity + 1)
            setproductQuantity(productQuantity + 1)
        }
        else if (mode === "minus" && productQuantity > 1)
        {
            modifyProductQuantity(id, productQuantity - 1)
            setproductQuantity(productQuantity - 1)
        }
    }

    return (
        <>
            <li>
                <img src={img} />
                <div>
                    <h3>{name}</h3>
                    <button onClick={() => {removeFromCart({id})}}>✖ Eliminar</button>
                </div>
                <div>
                    <ItemQuantitySelector quantity={quantity} handleClick={handleClick} />
                    <h4>{`Stock disponible: ${stock}`}</h4>
                </div>
                <h3>{`$ ${price * productQuantity}`}</h3>
            </li>
        </>
    )
}