import { ServiceRent } from "../services/ServiceRent.js"

export class Rent {

    constructor() { }
    async getInto(request, response) {
        let rent = new ServiceRent()
        try {

            let data = request.body
            await rent.getInto(data)
            response.status(200).json({
                message: 'success registering the rent',
                data: null
            })

        } catch (error) {
            response.status(200).json({
                message: 'Failed to register the rent' + error,
                data: null
            })

        }
    }

    async searchALL(request, response) {

        let rent = new ServiceRent()
        try {
            response.status(200).json({
                message: 'success in the rents inquiry',
                data: await rent.search()
            })
        } catch (error) {
            response.status(400).json({
                message: 'we failed in the query' + error,
                data: null
            })
        }
    }

    async searchById(request, response) {

        let rent = new ServiceRent()
        try {
            let id = request.params.id
            response.status(200).json({
                message: 'success looking for the rent',
                data: await rent.searchId(id)
            })
        } catch (error) {
            response.status(400).json({
                message: 'failed looking for the rent' + error,
                data: null
            })
        }
    }

    async update(request, response) {

        let rent = new ServiceRent()
        try {
            let id = request.params.id
            let data = request.body
            await rent.update(id, data)
            response.status(200).json({
                message: 'success editing the rent',
                data: null
            })

        } catch (error) {
            response.status(400).json({
                message: 'failed editing rent' + error,
                data: null
            })

        }

    }
    async delete(request, response) {

        let rent = new ServiceRent()
        try {
            let id = request.params.id
            await rent.delete(id)
            response.status(200).json({
                message: 'success removing the rent',
                data: null
            })

        } catch (error) {
            response.status(400).json({
                message: 'failed removing rent' + error,
                data: null
            })

        }

    }


}