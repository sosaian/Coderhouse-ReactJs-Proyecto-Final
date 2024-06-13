import './ItemDetail.css'
import { ItemQuantitySelector } from '../ItemQuantitySelector/ItemQuantitySelector.jsx'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext.jsx'

export function ItemDetail({ item })
{
    const [quantity, setQuantity] = useState(1)
    const { addToCart } = useContext(CartContext)

    const handleClick = (mode) => {
        if (mode === "plus" && item.stock > quantity)
            setQuantity(quantity + 1)
        else if (mode === "minus" && quantity > 1)
            setQuantity(quantity - 1)
    }

    return(
        <>  
            <div className="itemDetail">
                <div>
                    <img src={item.imgDetail} />
                </div>
                <div>
                    <h2>{item.name}</h2>
                    <h3>{`$ ${item.price}`}</h3>
                    <p>{`Stock actual: ${item.stock}`}</p>
                    <ItemQuantitySelector quantity={quantity} handleClick={handleClick} />
                    <button onClick={() => addToCart({...item, quantity: 1})}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}