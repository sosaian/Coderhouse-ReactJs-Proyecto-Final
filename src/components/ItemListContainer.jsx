import './ItemListContainer.css'

function ItemListContainer()
{
    return (
        <>
            <ul id="listadoProductos">
                <li>
                    <img src="https://placehold.co/75x100" />
                    <div>ALFAJORES SEMILLA x 9uds - HOY 20% OFF</div>
                    <div>$ 16500</div>
                    <input type="button" value="Agregar al carrito" />
                </li>
                <li>
                    <img src="https://placehold.co/75x100" />
                    <div>ALFAJORES SUPER DULCE DE LECHE x 9un. - HOY 20% OFF</div>
                    <div>$ 16500</div>
                    <input type="button" value="Agregar al carrito" />
                </li>
                <li>
                    <img src="https://placehold.co/75x100" />
                    <div>ALFAJORES 70% CACAO PURO X 9 uds</div>
                    <div>$ 16500</div>
                    <input type="button" value="Agregar al carrito" />
                </li>
            </ul>
        </>
    )
}

export default ItemListContainer