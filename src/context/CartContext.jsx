import { createContext, useEffect, useState } from "react";


export const CartContext= createContext();

const carritoInicial= JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) =>{
    
  const [carrito, setCarrito]= useState(carritoInicial);

  const agregarAlCarrito= (item, cantidad) =>{
    const itemAgregado = {...item, cantidad}
    const nuevoCarrito =[...carrito]; //copia modificable de carrito
    const estaEnCarrito = nuevoCarrito.find((producto)=> producto.id === itemAgregado.id); //me devuelve el producto(item) encontrado

   

    if(estaEnCarrito){
      estaEnCarrito.cantidad =estaEnCarrito.cantidad + cantidad; //le sube la cantidad al producto repetido 
      
    }else{
      nuevoCarrito.push(itemAgregado);//que el nuevo estado sea lo que tenia el carrito + el nuevo item
      
    }
    setCarrito(nuevoCarrito); //setea el nuevo carrito
  }

  const cantidadEnCarrito = () =>{
    return carrito.reduce((acc, prod) => acc + prod.cantidad,0); //recibimos acumulador y cada item del array, que vaya sumando la cantidad al producto iniciando en 0
  }

  const precioTotal = () =>{
    return carrito.reduce((acc, prod)=> acc + prod.precio * prod.cantidad, 0); //estariamos sumando todos los precios de cada uno de los productos por su cantidad y sumandolos entre si
  }

  const vaciarCarrito = () =>{
    setCarrito([]);
  }

  //que algo se ejecute cuando el estado cambia
  useEffect(()=>{
    localStorage.setItem("carrito",JSON.stringify(carrito))
  },[carrito]) //que se ejecute cuando carrito cambia

  return (
  <CartContext.Provider value={{carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito}}>
    {children}
  </CartContext.Provider>

  )

  //los children sería todo lo que esta dentro de la etiqueta

}
