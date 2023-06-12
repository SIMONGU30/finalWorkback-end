import express from 'express'
import { routes } from '../routes/routes.js'
import { connect } from '../dataBase/Connection.js'

import cors from 'cors'

export class Server {

    constructor() {

        this.app = express()
        this.connectwithBD()
        this.callAuxiliaries()
        this.attendServices()

    }

    turnOnServer() {
        this.app.listen(process.env.PORT, function () {
            console.log(`server turned on${process.env.PORT}`)
        })
    }

    attendServices() {
        this.app.use('/', routes)
    }



    connectwithBD() {
        connect()

    }

    callAuxiliaries() {

        this.app.use(express.json())
        this.app.use(cors())
    }

}