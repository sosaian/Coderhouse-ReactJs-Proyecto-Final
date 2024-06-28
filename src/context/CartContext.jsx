import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartComponentContext = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addToCart = (product) => {
        const PRODUCT_INDEX = cart.findIndex(cart_product => cart_product.id === product.id)

        if (PRODUCT_INDEX === -1)
            setCart([...cart, product])
        else
        {
            const MODIFIED_CART = [...cart]
            MODIFIED_CART[PRODUCT_INDEX].quantity += 1
            setCart(MODIFIED_CART)
        }
    }

    const removeFromCart = (product) => {
        const PRODUCT_INDEX = cart.findIndex(cart_product => cart_product.id === product.id)
        
        PRODUCT_INDEX === 1 ? console.log("ERROR") : setCart(cart.splice(index, 1))
    }

    const emptyCart = () => {
        setCart([])
    }

    const modifyProductQuantity = (id, newQuantity) => {
        const PRODUCT_INDEX = cart.findIndex(cart_product => cart_product.id === id)

        if (PRODUCT_INDEX === -1)
        {
            console.log("ERROR: PRODUCT_INDEX not found.");
            return cart;
        }

        const MODIFIED_CART = [...cart]
        MODIFIED_CART[PRODUCT_INDEX].quantity = newQuantity
        setCart(MODIFIED_CART)
    }

    const showCartProducts = () => {
        console.log(cart);
    }

    return (
        <CartContext.Provider value={ { cart, addToCart, removeFromCart, emptyCart, modifyProductQuantity, showCartProducts } }>
            {children}
        </CartContext.Provider>
    )
}