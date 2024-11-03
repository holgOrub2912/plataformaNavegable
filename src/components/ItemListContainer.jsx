import { useEffect, useState } from "react";
import {pedirDatos} from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient("https://jyitittqycpbrgriliro.supabase.co",
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5aXRpdHRxeWNwYnJncmlsaXJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxODg0NTAsImV4cCI6MjA0NDc2NDQ1MH0.x9cToxBdjInYbJsTufzIfaY28d7ZL8xs3UtGJWLpmts");

//logica para setear los productos en un estado
const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    
    const [titulo, setTitulo]=useState("Productos");

    const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda NUEVO

    const categoria = useParams().categoria;
    
    

    const filteredProducts = productos.filter(product => product.product_categories.slug === categoria)

    //nuevo
    const filteredProductsName = productos.filter(product => 
        product.titulo.toLowerCase().includes(searchTerm.toLowerCase()) // Búsqueda dinámica
    );
    //nuevo
    
    const fetchProducts = async () => {
        const { data } = await supabase.from("product_products").select('*, product_categories (*)');
        setProductos(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    /*
   useEffect(() => {
    pedirDatos()
    .then((respuesta)=>{
        //que pasa con la respuesta
        if(categoria){ //si hay una categoria que la filtre
            setProductos(respuesta.filter((prod) => prod.categoria===categoria));
            setTitulo(categoria);
        }else{ //sino que me muestre todos los productos
            setProductos(respuesta);
            setTitulo("Productos");
        }
        
        })
   },[categoria]) //que tmb se actualice cuando categoria cambie
*/

    //nuevo
    useEffect(() => {
        if (categoria && productos.length > 0) {
            
            const categoriaEncontrada = productos.find(
                product => product.product_categories.slug === categoria
            );
            
            if (categoriaEncontrada) {
                setTitulo(categoriaEncontrada.product_categories.nombreCategoria);
            } else {
                setTitulo("Categoría no encontrada");
            }
        } else {
            setTitulo("Productos"); // Si no hay categoría, mostrar "Productos"
        }
    }, [categoria, productos]); // cuando cambie la categoría o los productos
    
    //nuevo



    //nuevo
    const productsToShow = categoria
    ? filteredProducts // Mostrar los productos filtrados por categoría si existe una
    : searchTerm
    ? filteredProductsName // Mostrar productos filtrados por nombre si hay búsqueda
    : productos; // Mostrar todos los productos si no hay búsqueda ni categoría
    //nuevo


    return(
        //encargado de mostrar los productos
        <div>
            {/* Barra de búsqueda solo si no hay categoría */}
            {!categoria && (
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Buscar producto..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            )}

            {/* Renderizar los productos según lo filtrado */}
            <ItemList productos={productsToShow} titulo={titulo} />
        </div>
    );
}
export default ItemListContainer