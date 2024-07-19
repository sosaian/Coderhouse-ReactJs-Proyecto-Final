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
            MODIFIED_CART[PRODUCT_INDEX].quantity += ( product.quantity || 1 )
            setCart(MODIFIED_CART)
        }

        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer
                toast.onmouseleave = Swal.resumeTimer
            }
        })

        Toast.fire({
            icon: "success",
            title: `¡${product.quantity === 1 ? "Producto añadido" : "Productos añadidos"} correctamente al carrito!`
        })
    }

    const removeFromCart = (product, moreThanOne) => {
        const PRODUCT_INDEX = cart.findIndex(cart_product => cart_product.id === product.id)

        if (PRODUCT_INDEX === -1)
        {
            console.error("ERROR: No hay un producto con ese ID.")
            return
        }

        if (cart.length === 1)
        {
            setCart([])
            return
        }
        
        const MODIFIED_CART = [...cart]
        MODIFIED_CART.splice(PRODUCT_INDEX, 1)
        setCart(MODIFIED_CART)

        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer
                toast.onmouseleave = Swal.resumeTimer
            }
        })

        Toast.fire({
            icon: "success",
            title: `¡${moreThanOne ? "Productos eliminados" : "Producto eliminado"} correctamente del carrito!`
        })
    }

    const emptyCart = () => { 
        Swal.fire({
            title: "Estás por vaciar el carrito... ¿Continuar?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Si, vaciar el carrito.",
            denyButtonText: "No, mantener el carrito."
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("¡Carrito eliminado correctamente!", "", "success")
                setCart([])
            }
        })
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