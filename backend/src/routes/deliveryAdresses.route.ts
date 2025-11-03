import { Router } from "express"
import { getDeliveryAdressesController } from "../controllers/deliveryAddresses.controller.js"

export const deliveryAdressesRoute = Router()

deliveryAdressesRoute.get("/", getDeliveryAdressesController)