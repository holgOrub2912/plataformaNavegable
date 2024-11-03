import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => { vaciarCarrito(); }


    return (
        <div className="container">
            <h1 className='main-title'>Carrito owo</h1>
            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <br />
                        <h3>{prod.titulo}</h3>
                        <p>Precio Unit: ${prod.precio}</p>
                        <p>Precio Total: ${prod.precio * prod.cantidad}</p>
                        <p>Cantidad: {prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }
            {
                carrito.length > 0 ?
                <>
                    <h2>Precio Total ${precioTotal()}</h2>
                    <button className="boton-vaciar" onClick={handleVaciar}> Vaciar</button>
                </> :
                <h2>El carriro esta vacio</h2>
            }

        </div>
    )
}

export default Carrito
