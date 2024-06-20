import { ItemDetail } from "../ItemDetail/ItemDetail.jsx"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/client"

export function ItemDetailContainer()
{
    const itemId = useParams().itemId
    const [product_info, setProductInfo] = useState()

    useEffect(() => {
        const PRODUCT_REF = doc(db, "products", itemId)

        getDoc(PRODUCT_REF)
            .then( snapshot => {
                snapshot.exists() && setProductInfo({ id: snapshot.id, ...snapshot.data() })
            })
            .catch( error => console.error(error))
    }, [])
    
    if (product_info)
        return <ItemDetail item={product_info}/>

    return <h2>¡UPS! Ese producto no existe...</h2>
}