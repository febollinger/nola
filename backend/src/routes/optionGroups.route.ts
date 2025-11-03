import { Router } from "express"
import { getOptionGroupsController } from "../controllers/optionGroups.controller.js"

export const optionsGroupsRoute = Router()

optionsGroupsRoute.get("/", getOptionGroupsController)