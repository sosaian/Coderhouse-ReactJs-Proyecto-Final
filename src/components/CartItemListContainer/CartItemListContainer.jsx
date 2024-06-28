import './CartItemListContainer.css'
import { CartContext } from '../../context/CartContext'
import { CartItemList } from '../CartItemList/CartItemList'
import { useContext, useState, useEffect } from 'react'

export function CartItemListContainer()
{
    const { cart, emptyCart } = useContext(CartContext)
    
    const getTotal = () => cart.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)

    const [total, setTotal] = useState(getTotal)
    
    const getProductsAmount = () => cart.reduce((accumulator, product) => accumulator + product.quantity, 0)
    
    const [productsAmount, setProductsAmount] = useState(getProductsAmount)

    useEffect(() => {
        setTotal(getTotal)
        setProductsAmount(getProductsAmount)
    }, [cart])

    const createOrder = () => {
        const ORDER = {
            buyer: { name: "Juan", phone: "123-456789", email: "name@example.com"},
            cart: [...cart],
            total
        }
        
        console.log(ORDER)
    }

    const ERROR_MESSAGE = "¡UPS! Parece que no hay productos disponibles ahora..."

    if (cart.length === 0)
        return <h2>{ERROR_MESSAGE}</h2>
    
    return(
        <>
            <CartItemList/>
            <div>
                <h2>Resumen de compra</h2>
                <div>
                    <h3>Productos ({productsAmount})<span>{`$ ${total}`}</span></h3>
                    <h3>Envío<span>GRATIS</span></h3>
                    <h2>Total<span>{`$ ${total}`}</span></h2>
                </div>
                <button onClick={emptyCart}>VACIAR CARRITO</button>
                <button onClick={createOrder}>COMPRAR</button>
            </div>
        </>
    ) 
}