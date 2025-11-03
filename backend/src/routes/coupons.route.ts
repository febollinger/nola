import { Router } from "express"
import { getCouponsController } from "../controllers/coupons.controller.js"

export const couponsRoute = Router()

couponsRoute.get("/", getCouponsController)