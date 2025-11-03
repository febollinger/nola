import { Router } from "express"
import { getItemsController } from "../controllers/items.controller.js"

export const itemsRoute = Router()

itemsRoute.get("/", getItemsController)