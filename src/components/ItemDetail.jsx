import { useContext, useState, useEffect } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import { supabase } from "./ItemListContainer";


const ItemDetail = ({ item }) => {
  const {id} = useParams();
  const {carrito, agregarAlCarrito} = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);
  const [product, setProduct] = useState();

  const handlerRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handlerSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  const fetchProductById = async (id) => {
    const {data} = await supabase.from("product_products").select('*, product_categories(nombreCategoria)').eq('id', id)
    setProduct(data[0])
  }

  useEffect(() => {
    fetchProductById(id);
  }, [])

  if (!product) return <p className="carga">Cargando Productos...</p>
  
  return (
    //mostrar detalles del producto
    <div className="container">
      <div className="producto-detalle">
        <img src={product?.imagen} alt={product.titulo} />
        <div>
          <h3 className="titulo">{product.titulo}</h3>
          <p className="descripcion">{product.descripcion}</p>
          <p className="categoria">Categoria: {product.product_categories.nombreCategoria}</p>
          <p className="precio">${product.precio}</p>
          
          <ItemCount cantidad={cantidad} 
          handlerSumar={handlerSumar}
          handlerRestar={handlerRestar} 
          handlerAgregar={() =>{agregarAlCarrito(product,cantidad)}}/>
        </div>
      </div>

    </div>
  )
}

export default ItemDetail
