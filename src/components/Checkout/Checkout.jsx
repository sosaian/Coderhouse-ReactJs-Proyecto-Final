import './Checkout.css'
import { CartContext } from '../../context/CartContext'
import { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/client'

export function Checkout()
{
    const { cart, emptyCart } = useContext(CartContext)
    const navigateTo = useNavigate()

    const PRODUCTS_AMMOUNT = cart.reduce((accumulator, product) => accumulator + product.quantity, 0)
    const TOTAL = cart.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)

    const FORM_REF = useRef(null)

    const validateEmail = (email) => {
        /*
            Es importante tener en cuenta que no cubre todos los casos posibles y específicos definidos por
            los estándares de correos electrónicos (RFC 5322), pero es adecuado para la mayoría de los
            propósitos comunes.
        */

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        /* 
            Desglose de la Expresión Regular
                ^: Comienzo de la línea.
                [^\s@]+: Uno o más caracteres que no son espacios en blanco ni '@'.
                @: Exactamente un símbolo '@'.
                [^\s@]+: Uno o más caracteres que no son espacios en blanco ni '@'.
                \.: Exactamente un punto '.'.
                [^\s@]+: Uno o más caracteres que no son espacios en blanco ni '@'.
                $: Fin de la línea.
        */

        return regex.test(email);
    }

    const validateForm = (name, surname, email) => {        
        if (name === "")
        {
            console.log("ERROR: El campo 'Nombre' NO puede estar vacío.")
            return false
        }

        if (surname === "")
        {
            console.log("ERROR: El campo 'Apellido' NO puede estar vacío.")
            return false
        }
        
        /*
            Uno podría a priori hacer una restricción en los campos "name" y "surname" para evitar números
            o caracteres especiales como signos de exclamación u otros, pero la realidad es que en la
            actualidad existen nombres que contienen números, por ejemplo el polémico caso de uno de los
            hijos de Elon Musk, "X Æ A-12". Y también otros casos como ocurren en la lengua Khoisan donde se
            utiliza el signo "ǃ" para denotar un clic dental (similar a un chasquido).
        */

        if (validateEmail(email) === false)
        {
            console.log("ERROR: El correo electrónico ingresado no es válido.")
            return false
        }

        return true
    }

    const [paymentInProcess, setPaymentInProcess] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        
        //  Otra forma de tener estos valores es con useState() pero lo hago de esta forma
        //  para solamente asignar los valores al momento del submit y no 'onChange'
        
        const NAME = FORM_REF.current.children[0].elements[0].value.trim()
        const SURNAME = FORM_REF.current.children[0].elements[1].value.trim()
        const EMAIL = FORM_REF.current.children[0].elements[2].value // En HTML5 aplica trim() nativamente
        
        if (validateForm(NAME, SURNAME, EMAIL) === false) // validateForm() se encarga del UX del error
            return
        
        setPaymentInProcess(true)
        
        const DATE = new Date().toISOString() // Creo y convierto la fecha al estándar ISO8601

        //  Intencionalmente evito cargar NAME, SURNAME y EMAIL para evitar exponer información sensible
        //  con este proyecto que no es real ni puedo asegurar la correcta manipulación de datos en la DB

        const ORDER = {
            buyer: {
                name: "Test",
                surname: "User",
                email: "name@example.com"
            },
            items: cart,
            date: DATE,
            total: TOTAL
        }

        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, ORDER).then(({id}) => {
            emptyCart()
            
            Swal.fire({
                title: "COMPRA EXITOSA",
                html: `El ID de tu compra es el siguiente:<br>${id}<br>También será enviado al correo electrónico.`,
                icon: "success"
            }).then(() => navigateTo('/'))
        })
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
                <button id="formSubmit" type="submit">{paymentInProcess ? "AGUARDA UNOS INSTANTES": "FINALIZAR COMPRA"}</button>
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