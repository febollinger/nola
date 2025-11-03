import type { Request, Response } from "express"
import { createCustomersService, editCustomersByIdService, getCustomersByIdService, getCustomersService, getLoyalCustomersService } from "../services/customers.service.js"

export const getLoyalCustomersController = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10

    const loyalCustomers = await getLoyalCustomersService(page, limit);
    return res.status(200).json(loyalCustomers);
  } catch (error: any) {
    return res.status(500).json({ message: (error as Error).message });
  }
};

export const createCustomersController = async (req: Request, resp: Response) => {
    try {
        const reqBody = req.body

        const newCustumers = await createCustomersService(reqBody)

        return resp.status(201).json(newCustumers)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getCustomersController = async (req: Request, resp: Response) => {
    try {
        const gettingCostumers = await getCustomersService()

        return resp.status(200).json(gettingCostumers)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getCustomersByIdController = async (req: Request, resp: Response) => {
    try {
        const requestId: number | undefined= Number(req.params.id)
        const custumersById = await getCustomersByIdService(requestId)

        return resp.status(200).json(custumersById)
    } catch (error: any) {
        return resp.status(404).json({message: error.message})
    }
}

export const editCustomersByIdController = async (request: Request, response: Response) => {
    try {
        const getId: number = Number(request.params.id)
        const bodyData = request.body

        const editedCustomers = await editCustomersByIdService(getId, bodyData)

        return response.status(201).json(editedCustomers)
    } catch (error: any) {
        return response.status(404).json({message: error.message})
    }
}
