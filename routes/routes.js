import express from 'express'

import {Car} from '../controllers/ControllerCar.js'
import {Rent} from '../controllers/ControllerRent.js'
import {ReturnCar} from '../controllers/ControllerReturnCar.js'
import {User} from '../controllers/ControllerUser.js'



let controllerCar=new Car()
let controllerRent=new Rent()
let controllerReturnCar=new ReturnCar()
let controllerUser=new User()


export let routes=express.Router()

//car
routes.get('/api/v1/turboRentaCar/cars/', controllerCar.searchALL)
routes.get('/api/v1/turboRentaCar/car/:id/', controllerCar.searchById)
routes.post('/api/v1/turboRentaCar/car/',controllerCar.getInto)
routes.put('/api/v1/turboRentaCar/car/:id/', controllerCar.update)
routes.delete('/api/v1/turboRentaCar/car/:id/', controllerCar.delete)

//Rent
routes.get('/api/v1/turboRentaCar/rents/', controllerRent.searchALL)
routes.get('/api/v1/turboRentaCar/rent/:id/', controllerRent.searchById)
routes.post('/api/v1/turboRentaCar/rent/',controllerRent.getInto)
routes.put('/api/v1/turboRentaCar/rent/:id/', controllerRent.update)
routes.delete('/api/v1/turboRentaCar/rent/:id/', controllerRent.delete)

//ReturnCar
routes.get('/api/v1/turboRentaCar/returncars/', controllerReturnCar.searchALL)
routes.get('/api/v1/turboRentaCar/returncar/:id/', controllerReturnCar.searchById)
routes.post('/api/v1/turboRentaCar/returncar/',controllerReturnCar.getInto)
routes.put('/api/v1/turboRentaCar/returncar/:id/', controllerReturnCar.update)
routes.delete('/api/v1/turboRentaCar/returncar/:id/', controllerReturnCar.delete)


//User
routes.get('/api/v1/turboRentaCar/users/', controllerUser.searchALL)
routes.get('/api/v1/turboRentaCar/user/:id/', controllerUser.searchById)
routes.post('/api/v1/turboRentaCar/user/',controllerUser.getInto)
routes.put('/api/v1/turboRentaCar/user/:id/', controllerUser.update)
routes.delete('/api/v1/turboRentaCar/user/:id/', controllerUser.delete)
