import { ItemDetail } from "../ItemDetail/ItemDetail.jsx"
import { getProduct } from '../../data/async-mock.js'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export function ItemDetailContainer()
{
    const itemId = parseInt(useParams().itemId)
    const [product_info, setProductInfo] = useState({})

    useEffect(() => {
        getProduct(itemId)
            .then(PRODUCT => setProductInfo(PRODUCT))
            .catch(err => {
                console.error(err)
                setProductInfo(null)
            })
    }, [])
    
    return(
        <>
            {product_info ? <ItemDetail item={product_info}/> : <h2>¡UPS! Ese producto no existe...</h2>}
        </>
    )
}