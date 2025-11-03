import { Router } from "express";
import { getBrandsController } from "../controllers/brands.controller.js";
import { categoriesRouter } from "./categories.route.js";
import { getSubBrandsController } from "../controllers/subBrands.controller.js";

export const brandsRouter = Router()

//brands
brandsRouter.get("/", getBrandsController)

//sub brands
brandsRouter.get("/sub", getSubBrandsController)