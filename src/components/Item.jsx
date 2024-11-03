import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    //informacion de cada uno de los productos
    <div className="producto">
        <img src={producto.imagen} alt={producto.titulo}/>

        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio$ : {producto.precio}</p>
            <p>Categoria : {producto.product_categories.nombreCategoria}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>


        </div>
      
    </div>
  )
}

export default Item
