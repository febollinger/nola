import { Router } from "express"
import { getItemProductSalesController } from "../controllers/itemProductSale.controller.js"
import { getItemProductSaleDetailsController } from "../controllers/itemItemProductSale.controller.js"

export const itemProductSaleRoute = Router()

//Item product Sale
itemProductSaleRoute.get("/",getItemProductSalesController)


//Item product sale details

itemProductSaleRoute.get("/details", getItemProductSaleDetailsController)