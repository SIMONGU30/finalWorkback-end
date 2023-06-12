const {} = require('')
import { modeluser } from '../models/modelUser.js'

export class ServiceUser {
    constructor() { }

    async getInto(infoUser) {
        let userGetInto = new modeluser(infoUser)
        return await userGetInto.save()
    }
    async search() {
        let users = await modeluser.find()
        return users
    }
    async searchId(idUser) {
        let user = await modeluser.findById(idUser)
        return user
    }
    async update(idUser, dataUser) {
        return await modeluser.findByIdAndUpdate(idUser, dataUser)
    }
    async delete(idUser) {
        return await modeluser.findByIdAndDelete(idUser)
    }

}