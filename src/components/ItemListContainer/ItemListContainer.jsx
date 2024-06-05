import './ItemListContainer.css'
import { getProductList } from '../../data/async-mock.js'
import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList.jsx'

function ItemListContainer()
{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductList()
            .then(response => setProducts(response))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            {loading ? <h2>Cargando productos...</h2> : (products ? <ItemList products={products} /> : <h2>¡UPS! Parece que no hay productos disponibles ahora...</h2>)}
        </>
    )
}

export default ItemListContainer