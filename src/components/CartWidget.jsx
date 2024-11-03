import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { FaShoppingCart } from "react-icons/fa"

const CartWidget = () => {

    const {cantidadEnCarrito}=useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/carrito">
      <FaShoppingCart />
      <span className="numerito"> {cantidadEnCarrito()}</span>
      </Link>
    </div>
  )
}

export default CartWidget
