import { Router } from "express"
import { createDeliverySalesController, editDeliverySalesByIdController, getDeliverySalesByIdController, getDeliverySalesController } from "../controllers/deliverySales.controller.js"

export const deliverySalesRoute = Router()

deliverySalesRoute.get("", getDeliverySalesController)
deliverySalesRoute.get("/:id", getDeliverySalesByIdController)
deliverySalesRoute.post("", createDeliverySalesController)
deliverySalesRoute.patch("/:id", editDeliverySalesByIdController)