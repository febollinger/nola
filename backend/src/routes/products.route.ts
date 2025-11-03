import { Router } from "express"
import { deleteProductController, editProductByIdController, getProductByIdController, getProductsController } from "../controllers/products.controller.js"
import { deleteProductSaleController, editProductSaleByIdController, getProductSaleByIdController, getProductsSalesController } from "../controllers/productSales.controller.js"

export const productsRoute = Router()


productsRoute.get("", getProductsController)

productsRoute.get("/sales", getProductsSalesController)
productsRoute.get("/sales/:id", getProductSaleByIdController)
productsRoute.patch("/sales/:id", editProductSaleByIdController)
productsRoute.delete("/sales/:id", deleteProductSaleController)

productsRoute.get("/:id", getProductByIdController)
productsRoute.patch("/:id", editProductByIdController)
productsRoute.delete("/:id", deleteProductController)