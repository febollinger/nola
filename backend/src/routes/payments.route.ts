import { Router } from "express"
import { getPaymentsController } from "../controllers/payments.controller.js"
import { getPaymentsTypesController } from "../controllers/paymentsTypes.controller.js"

export const paymentsRoute = Router()

//Payments
paymentsRoute.get("/", getPaymentsController)



//Payments Types

paymentsRoute.get("/types", getPaymentsTypesController)