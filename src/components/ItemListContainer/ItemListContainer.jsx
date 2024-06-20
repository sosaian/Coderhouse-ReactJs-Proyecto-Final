import './ItemListContainer.css'
import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList.jsx'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/client"

export function ItemListContainer()
{
    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)
    const GREETING = "Cargando productos..."
    const ERROR_MESSAGE = "¡UPS! Parece que no hay productos disponibles ahora..."
    const { categoryId } = useParams()

    useEffect(() => {
        let products_ref
        
        if (categoryId)
        {
            products_ref = query(
                collection(db, "products"),
                where("category", "==", `${categoryId}`)
            )
        }
        else
        {
            products_ref = collection(db, "products")
        }

        getDocs(products_ref)
            .then(response => setProducts(response.docs.map((doc) => ( {...doc.data(), id: doc.id}))))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))

        return setLoading(true);
    }, [categoryId])

    if (loading)
        return <h2>{GREETING}</h2>

    if (products)
        return <ItemList products={products} />

    return <h2>{ERROR_MESSAGE}</h2>
}