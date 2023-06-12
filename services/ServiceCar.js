import { modelcar } from '../models/modelCar.js'

export class ServiceCar {
    constructor() { }

    async getInto(infoCar) {
        let carGetInto = new modelcar(infoCar)
        return await carGetInto.save()
    }
    async search() {
        let cars = await modelcar.find()
        return cars
    }
    async searchId(idCar) {
        let car = await modelcar.findById(idCar)
        return car
    }
    async update(idCar, dataCar) {
        return await modelcar.findByIdAndUpdate(idCar, dataCar)
    }
    async delete(idCar) {
        return await modelcar.findByIdAndDelete(idCar)
    }

}