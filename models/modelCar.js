import mongoose from 'mongoose'

const Schema=mongoose.Schema

const Car=new Schema({
    platenumber:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    state:{
        type:Boolean,
        required:true
    },
    dailyvalue:{
        type:Number,
        required:true
    }
})

export const modelcar=mongoose.model('cars',Car)