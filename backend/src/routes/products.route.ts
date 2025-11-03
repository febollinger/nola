import { Router } from "express"
import { getProductsController } from "../controllers/products.controller.js"
import { getProductsSalesController } from "../controllers/productSales.controller.js"

export const productsRoute = Router()

//Products
productsRoute.get("/", getProductsController)

//Products Sale

productsRoute.get("/sales", getProductsSalesController)