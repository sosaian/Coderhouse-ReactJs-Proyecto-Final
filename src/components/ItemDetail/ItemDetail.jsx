import { ItemCount } from '../ItemCount/ItemCount.jsx'
import { useState } from 'react'

export function ItemDetail({ item })
{
    const [quantity, setQuantity] = useState(1)

    const handleClick = (mode) => {
        if (mode === "plus" && item.stock > quantity)
            setQuantity(quantity + 1)
        else if (mode === "minus" && quantity > 1)
            setQuantity(quantity - 1)
    }

    return(
        <>  
            <div>
                <div>
                    <img src={item.img} />
                </div>
                <div>
                    <h2>{item.name}</h2>
                    <div>{`$ ${item.price}`}</div>
                    <div>{`Stock actual: ${item.stock}`}</div>
                    <ItemCount quantity={quantity} handleClick={handleClick} />
                    <button>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}