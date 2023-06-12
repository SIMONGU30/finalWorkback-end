import mongoose from "mongoose";

const Schema= mongoose.Schema

const Returncar=new Schema({

    returnnumber:{
        type:Number,
        required:true
    },
    rentnumber: {
        type: Number,
        required:true
    },
    returndate:{
        type: Date,
        required:true
    }
})

export const modelreturncar=mongoose.model('returncars',Returncar)