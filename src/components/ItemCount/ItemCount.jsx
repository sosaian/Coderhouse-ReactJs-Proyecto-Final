import './ItemCount.css'

export function ItemCount({ quantity, handleClick })
{
    return(
        <div>
            <button onClick={() => handleClick("minus")}>-</button>
            <div>{quantity}</div>
            <button onClick={() => handleClick("plus")}>+</button>
        </div>
    )
}