import { Router } from "express"
import { createDeliveryAddressesController, deleteDeliveryAddressesController, editDeliveryAddressesByIdController, getDeliveryAddressesByIdController, getDeliveryAddressesController } from "../controllers/deliveryAddresses.controller.js"

export const deliveryAdressesRoute = Router()

deliveryAdressesRoute.get("", getDeliveryAddressesController)
deliveryAdressesRoute.get("/:id", getDeliveryAddressesByIdController)
deliveryAdressesRoute.post("", createDeliveryAddressesController)
deliveryAdressesRoute.patch("/:id", editDeliveryAddressesByIdController)
deliveryAdressesRoute.delete("/:id", deleteDeliveryAddressesController)