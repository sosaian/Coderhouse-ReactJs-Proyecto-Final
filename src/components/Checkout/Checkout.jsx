import './Checkout.css'
import { CartContext } from '../../context/CartContext'
import { useContext, useRef } from 'react'

export function Checkout()
{
    const { cart } = useContext(CartContext)

    const PRODUCTS_AMMOUNT = cart.reduce((accumulator, product) => accumulator + product.quantity, 0)
    const TOTAL = cart.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)

    const FORM_REF = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()

        //  Otra forma de tener estos valores es con useState() pero lo hago de esta forma
        //  para solamente asignar los valores al momento del submit y no 'onChange'

        const NAME = FORM_REF.current.children[0].elements[0].value.trim()
        const SURNAME = FORM_REF.current.children[0].elements[1].value.trim()
        const EMAIL = FORM_REF.current.children[0].elements[2].value // En HTML5 aplica trim() nativamente

        const DATE = new Date().toISOString() // Creo y convierto la fecha al estándar ISO8601

        const ORDER = {
            buyer: {
                name: NAME,
                surname: SURNAME,
                email: EMAIL
            },
            items: cart,
            date: DATE,
            total: TOTAL
        }

        console.log(ORDER)
    }

    return (
        <>
            <form id="checkoutForm" ref={FORM_REF} onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Formulario de datos personales</legend>
        
                    <div>
                        <label htmlFor="formName">Nombre</label>
                        <input id="formName" type="text" placeholder="Ian" required />
                    </div>
                    <div>
                        <label htmlFor="formSurname">Apellido</label>
                        <input id="formSurname" type="text" placeholder="Sosa" required />
                    </div>
                    <div>
                        <label htmlFor="formEmail">Correo electrónico</label>
                        <input id="formEmail" type="email" placeholder="sosaian@proton.me" required />
                    </div>
                </fieldset>
                <button id="formSubmit" type="submit">FINALIZAR COMPRA</button>
            </form>
            <div id="checkoutTotal">
                <div>
                    <h2>Resumen de compra</h2>
                    <div>
                        <h3>Productos ({PRODUCTS_AMMOUNT})<span>{`$ ${TOTAL}`}</span></h3>
                        <h3>Envío<span>GRATIS</span></h3>
                        <h2>Total<span>{`$ ${TOTAL}`}</span></h2>
                    </div>
                </div>
                <div>
                    <span>&#9989;</span>
                    <p>La información cargada en el formulario NO va a ser almacenada ni transferida.</p>
                </div>
            </div>
        </>
    )
}