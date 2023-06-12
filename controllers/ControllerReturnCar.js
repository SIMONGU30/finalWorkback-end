import { ServiceReturnCar } from "../services/ServiceReturnCar.js"

export class ReturnCar {

    constructor() { }
    async getInto(request, response) {
        let returncar = new ServiceReturnCar()
        try {

            let data = request.body
            await returncar.getInto(data)
            response.status(200).json({
                message: 'success registering the ReturnCar',
                data: null
            })

        } catch (error) {
            response.status(200).json({
                message: 'Failed to register the ReturnCar' + error,
                data: null
            })

        }
    }

    async searchALL(request, response) {

        let returncar = new ServiceReturnCar()
        try {
            response.status(200).json({
                message: 'success in the ReturnCars inquiry',
                data: await returncar.search()
            })
        } catch (error) {
            response.status(400).json({
                message: 'we failed in the query' + error,
                data: null
            })
        }
    }

    async searchById(request, response) {

        let returncar = new ServiceReturnCar()
        try {
            let id = request.params.id
            response.status(200).json({
                message: 'success looking for the ReturnCar',
                data: await returncar.searchId(id)
            })
        } catch (error) {
            response.status(400).json({
                message: 'failed looking for the ReturnCar' + error,
                data: null
            })
        }
    }

    async update(request, response) {

        let returncar = new ServiceReturnCar()
        try {
            let id = request.params.id
            let data = request.body
            await returncar.update(id, data)
            response.status(200).json({
                message: 'success editing the ReturnCar',
                data: null
            })

        } catch (error) {
            response.status(400).json({
                message: 'failed editing ReturnCar' + error,
                data: null
            })

        }

    }
    async delete(request, response) {

        let returncar = new ServiceReturnCar()
        try {
            let id = request.params.id
            await returncar.delete(id)
            response.status(200).json({
                message: 'success removing the ReturnCar',
                data: null
            })

        } catch (error) {
            response.status(400).json({
                message: 'failed removing ReturnCar' + error,
                data: null
            })

        }

    }


}