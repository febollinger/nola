import { Router } from "express";
import { getCostumersController } from "../controllers/costumers.controller.js";

export const costumersRoute = Router()

costumersRoute.get("/", getCostumersController)