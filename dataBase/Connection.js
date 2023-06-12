import mongoose  from "mongoose";

export async function connect(){
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log('exito en la conexion')
    }
    catch(error){
        console.log("Error en la conexion con BD"+ error)
    }
}