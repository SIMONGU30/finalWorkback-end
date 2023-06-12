import { ServiceCar } from "../services/ServiceCar.js"

export class Car {

    constructor() { }
    async getInto(request, response) {
        let car = new ServiceCar()
        try {

            let data = request.body
            await car.getInto(data)
            response.status(200).json({
                message: 'success registering the car',
                data: null
            })

        } catch (error) {
            response.status(200).json({
                message: 'Failed to register the car' + error,
                data: null
            })

        }
    }

    async searchALL(request, response) {

        let car = new ServiceCar()
        try {
            response.status(200).json({
                message: 'success in the car inquiry',
                data: await car.search()
            })
        } catch (error) {
            response.status(400).json({
                message: 'we failed in the query' + error,
                data: null
            })
        }
    }

    async searchById(request, response) {

        let car = new ServiceCar()
        try {
            let id = request.params.id
            response.status(200).json({
                message: 'success looking for the car',
                data: await car.searchId(id)
            })
        } catch (error) {
            response.status(400).json({
                message: 'failed looking for the car' + error,
                data: null
            })
        }
    }

    async update(request, response) {

        let car = new ServiceCar()
        try {
            let id = request.params.id
            let data = request.body
            await car.update(id, data)
            response.status(200).json({
                message: 'success editing the car',
                data: null
            })

        } catch (error) {
            response.status(400).json({
                message: 'failed editing cart' + error,
                data: null
            })

        }

    }
    async delete(request, response) {

        let car = new ServiceCar()
        try {
            let id = request.params.id
            await car.delete(id)
            response.status(200).json({
                message: 'success removing the car',
                data: null
            })

        } catch (error) {
            response.status(400).json({
                message: 'failed removing cart' + error,
                data: null
            })

        }

    }


}