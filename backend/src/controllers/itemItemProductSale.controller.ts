import type { Request, Response } from "express"
import { createItemProductSaleDetailsService, deleteItemProductSaleDetailsService, editItemProductSaleDetailsByIdService, getItemProductSaleDetailsByIdService, getItemProductSaleDetailsService } from "../services/itemItemProductsSale.service.js"

export const createItemProductSaleDetailsController = async (req: Request, resp: Response) => {
    try {
        const reqBody = req.body

        const newProductDetail = await createItemProductSaleDetailsService(reqBody)

        return resp.status(201).json(newProductDetail)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getItemProductSaleDetailsController = async (req: Request, resp: Response) => {
    try {
        const gettingItemDetails = await getItemProductSaleDetailsService()

        return resp.status(200).json(gettingItemDetails)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getItemProductSaleDetailsByIdController = async (req: Request, resp: Response) => {
    try {
        const requestId: number | undefined= Number(req.params.id)
        const gettingItemDetailsById = await getItemProductSaleDetailsByIdService(requestId)

        return resp.status(200).json(gettingItemDetailsById)
    } catch (error: any) {
        return resp.status(404).json({message: error.message})
    }
}

export const editItemProductSaleDetailsByIdController = async (request: Request, response: Response) => {
    try {
        const getId: number = Number(request.params.id)
        const bodyData = request.body

        const editingItemDetailsById = await editItemProductSaleDetailsByIdService(getId, bodyData)

        return response.status(201).json(editingItemDetailsById)
    } catch (error: any) {
        return response.status(404).json({message: error.message})
    }
}

export const deleteItemProductSaleDetailsController = async (req: Request, resp:Response) => {
    try {
        const getId: number = Number(req.params.id)

        const deletedeItemDetailsById = await deleteItemProductSaleDetailsService(getId)

        return resp.status(200).json(deletedeItemDetailsById)
    } catch (error: any) {
        return resp.status(404).json({message: error.message})
    }
}