import { Router } from "express"
import { getDeliverySalesController } from "../controllers/deliverySales.controller.js"

export const deliverySalesRoute = Router()

deliverySalesRoute.get("/", getDeliverySalesController)