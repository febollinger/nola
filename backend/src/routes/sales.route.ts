import { Router } from "express"
import { getSalesController } from "../controllers/sales.controller.js"

export const salesRoute = Router()

salesRoute.get("", getSalesController)