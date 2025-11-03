import { Router } from "express";
import { createBrandController, deleteBrandController, editBrandsByIdController, getBrandsByIdController, getBrandsController } from "../controllers/brands.controller.js";
import { getSubBrandsController } from "../controllers/subBrands.controller.js";

export const brandsRouter = Router()

//brands
brandsRouter.get("", getBrandsController)
brandsRouter.get("/:id", getBrandsByIdController)
brandsRouter.patch("/:id", editBrandsByIdController)
brandsRouter.post("", createBrandController)
brandsRouter.delete("/:id", deleteBrandController)

//sub brands
brandsRouter.get("/sub", getSubBrandsController)