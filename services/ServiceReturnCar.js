import { modelreturncar } from '../models/modelReturnCar.js'

export class ServiceReturnCar {
    constructor() { }

    async getInto(infoReturnCar) {
        let returnCarGetInto = new modelreturncar(infoReturnCar)
        return await returnCarGetInto.save()
    }
    async search() {
        let returnCars = await modelreturncar.find()
        return returnCars
    }
    async searchId(idReturnCar) {
        let returnCar = await modelreturncar.findById(idReturnCar)
        return returnCar
    }
    async update(idReturnCar, dataReturnCar) {
        return await modelreturncar.findByIdAndUpdate(idReturnCar, dataReturnCar)
    }
    async delete(idReturnCar) {
        return await modelreturncar.findByIdAndDelete(idReturnCar)
    }

}