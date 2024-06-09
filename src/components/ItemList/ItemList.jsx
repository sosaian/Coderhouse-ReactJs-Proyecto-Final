import './ItemList.css'
import { Item } from '../Item/Item.jsx'

export function ItemList({ products })
{
    return (
        <ul id="productList">
            {products.map((p) =>
                <Item key={p.id}
                    id={p.id}
                    img={p.imgThumbnail}
                    name={p.name}
                    price={p.price} />)}
        </ul>
    )
}