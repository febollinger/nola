import { Router } from "express";
import { getcategoriesController } from "../controllers/categories.controller.js";

export const categoriesRouter = Router()

categoriesRouter.get("/", getcategoriesController)