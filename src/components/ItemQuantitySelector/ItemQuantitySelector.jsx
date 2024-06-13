import './ItemQuantitySelector.css'

export function ItemCount({ quantity, handleClick })
{
    return(
        <div id="itemCount">
            <button onClick={() => handleClick("minus")}>➖</button>
            <div>{quantity}</div>
            <button onClick={() => handleClick("plus")}>➕</button>
        </div>
    )
}