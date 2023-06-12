import { modelrent } from '../models/modelRent.js'

export class ServiceRent {
    constructor() { }

    async getInto(infoRent) {
        let rentGetInto = new modelrent(infoRent)
        return await rentGetInto.save()
    }
    async search() {
        let rents = await modelrent.find()
        return rents
    }
    async searchId(idRent) {
        let rent = await modelrent.findById(idRent)
        return rent
    }
    async update(idRent, dataRent) {
        return await modelrent.findByIdAndUpdate(idRent, dataRent)
    }
    async delete(idRent) {
        return await modelrent.findByIdAndDelete(idRent)
    }

}