import { ServiceUser } from "../services/ServiceUser.js"

export class User {

    constructor() { }
    async getInto(request, response) {
        let user = new ServiceUser()
        try {

            let data = request.body
            await user.getInto(data)
            response.status(200).json({
                message: 'success registering the user',
                data: null
            })

        } catch (error) {
            response.status(200).json({
                message: 'Failed to register the user' + error,
                data: null
            })

        }
    }

    async searchALL(request, response) {

        let user = new ServiceUser()
        try {
            response.status(200).json({
                message: 'success in the user inquiry',
                data: await user.search()
            })
        } catch (error) {
            response.status(400).json({
                message: 'we failed in the query' + error,
                data: null
            })
        }
    }

    async searchById(request, response) {

        let user = new ServiceUser()
        try {
            let id = request.params.id
            response.status(200).json({
                message: 'success looking for the user',
                data: await user.searchId(id)
            })
        } catch (error) {
            response.status(400).json({
                message: 'failed looking for the user' + error,
                data: null
            })
        }
    }

    async update(request, response) {

        let user = new ServiceUser()
        try {
            let id = request.params.id
            let data = request.body
            await user.update(id, data)
            response.status(200).json({
                message: 'success editing the user',
                data: null
            })

        } catch (error) {
            response.status(400).json({
                message: 'failed editing user' + error,
                data: null
            })

        }

    }
    async delete(request, response) {

        let user = new ServiceUser()
        try {
            let id = request.params.id
            await user.delete(id)
            response.status(200).json({
                message: 'success removing the user',
                data: null
            })

        } catch (error) {
            response.status(400).json({
                message: 'failed removing user' + error,
                data: null
            })

        }

    }


}