import { Router } from "express";
import { createCustomersController, getCustomersController, editCustomersByIdController, getCustomersByIdController, getLoyalCustomersController } from "../controllers/customers.controller.js";

export const customersRoute = Router()

customersRoute.get("", getCustomersController)
customersRoute.get("/loyal", getLoyalCustomersController)
customersRoute.get("/:id", getCustomersByIdController)
customersRoute.post("", createCustomersController)
customersRoute.patch("/:id", editCustomersByIdController)
