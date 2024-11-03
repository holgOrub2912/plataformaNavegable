import data from "../data/data.json"

//promesa que devuelva la data del json
export const pedirDatos =() => {
    
    return new Promise((resolve,reject) => {
        setTimeout( () =>{
            resolve(data);
        }, 500) //simulacion de una BD (podria hacerlo con firebase)
    })
}

//recibe un id y devuelve el producto
export const pedirItemPorID = (id) =>{
    return new Promise((resolve,reject)=>{

        const item =data.find((x) => x.id === id)

        if(item){
            resolve(item)
        }
        else{
            reject({
                error: "No se enontro el producto que buscabas"
            })
        }
    })
}