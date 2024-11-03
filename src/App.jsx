
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import { CartProvider } from "./context/CartContext";
import "./formato.css"

//dependencias necesarias para hacer routing
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Carrito from "./components/Carrito";

function App(){



  return(
    //independiente de la url la navbar siempre aparece, 
    //los otros componentes si son condicionales
    //routa dinamica :parametro
    //envolver la aplicacion en el contexto de mi carrito

    

    <div>
      <CartProvider>
      <BrowserRouter>

      <Navbar/> 

      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/productos" element={<ItemListContainer/>}></Route>
        <Route path="/productos/:categoria" element={<ItemListContainer/>}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/carrito" element={<Carrito/>}/>

      </Routes>


      </BrowserRouter>
      </CartProvider>
    </div>
  );
  
}
export default App
