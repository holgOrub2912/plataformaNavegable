import { useEffect, useState } from "react"
import { pedirItemPorID } from "../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


//ver info de un producto en especifico a traves de un id
const ItemDetailContainer = () => {

    const [item, setItem]= useState(null);
    //capturar ruta dinamicamente 
    const id = useParams().id; //devuelve objeto con parametros de url (id = /item:d )
    //ojo: el useParams devuelve strings

    useEffect(()=>{
        pedirItemPorID(Number(id))
        .then((respuesta)=>{
            setItem(respuesta); //con la respuesta que recibimos que haga un set
            //la respuesta va a ser el objeto que recibimos de la funcion
        })
    },[id])

  return (
    //producto que recibe de la funcion final
    <div>
      {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer
