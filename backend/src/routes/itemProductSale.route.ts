import { Router } from "express"
import { getItemProductSalesController } from "../controllers/itemProductSale.controller.js"
import { createItemProductSaleDetailsController, editItemProductSaleDetailsByIdController, getItemProductSaleDetailsByIdController, getItemProductSaleDetailsController } from "../controllers/itemItemProductSale.controller.js"

export const itemProductSaleRoute = Router()

//Item product Sale
itemProductSaleRoute.get("/",getItemProductSalesController)
itemProductSaleRoute.get("/",getItemProductSalesController)


//Item product sale details

itemProductSaleRoute.get("/details", getItemProductSaleDetailsController)
itemProductSaleRoute.get("/details/:id",getItemProductSaleDetailsByIdController)
itemProductSaleRoute.post("/details",createItemProductSaleDetailsController),
itemProductSaleRoute.patch("/details/:id",editItemProductSaleDetailsByIdController)
itemProductSaleRoute.delete("/details/:id",getItemProductSalesController)