import './ItemQuantitySelector.css'

export function ItemQuantitySelector({ quantity, handleClick })
{
    return(
        <div id="itemQuantitySelector">
            <button onClick={() => handleClick("minus")}>➖</button>
            <div>{quantity}</div>
            <button onClick={() => handleClick("plus")}>➕</button>
        </div>
    )
}