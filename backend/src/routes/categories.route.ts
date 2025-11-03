import { Router } from "express";
import { createCategoriesController, deleteCategorieController, editCategoriesByIdController, getCategoriesByIdController, getCategoriesController } from "../controllers/categories.controller.js";

export const categoriesRouter = Router()

categoriesRouter.get("", getCategoriesController)
categoriesRouter.get("/:id", getCategoriesByIdController)
categoriesRouter.post("/", createCategoriesController)
categoriesRouter.patch("/:id", editCategoriesByIdController)
categoriesRouter.delete("/:id", deleteCategorieController)
