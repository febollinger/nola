import { Router } from "express"
import { getStoresController } from "../controllers/stores.controller.js"

export const storesRoute = Router()

storesRoute.get("/", getStoresController)