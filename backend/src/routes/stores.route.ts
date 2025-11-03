import { Router } from "express"
import { getStoreByIdController, getStoreController } from "../controllers/stores.controller.js"

export const storesRoute = Router()

storesRoute.get("", getStoreController)
storesRoute.get("/:id", getStoreByIdController)