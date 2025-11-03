import type { Request, Response } from "express"
import { deleteProductSaleService, editProductSaleByIdByIdService, getProductSalesService, getProductsSaleByIdService } from "../services/productSales.service.js"

export const getProductsSalesController = async (req: Request, resp: Response
) => {
    try {
        const page: number = Number(req.query.page)
        const totalPage: number = Number(req.query.pageSize) || 10
        const gettingProducts = await getProductSalesService(page, totalPage)

        return resp.status(200).json(gettingProducts)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getProductSaleByIdController = async (req: Request, resp: Response) => {
    try {
        const requestId: number= Number(req.params.id)

        if(isNaN(requestId)){
            return resp.status(400).json({message: "Invalid product Id"})
        }

        const productById = await getProductsSaleByIdService(requestId)

        return resp.status(200).json(productById)
    } catch (error: any) {
        return resp.status(404).json({message: error.message})
    }
}

export const editProductSaleByIdController = async (request: Request, response: Response) => {
    try {
        const getId: number = Number(request.params.id)
        const bodyData = request.body

        const editedProduct = await editProductSaleByIdByIdService(getId, bodyData)

        return response.status(201).json(editedProduct)
    } catch (error: any) {
        return response.status(404).json({message: error.message})
    }
}

export const deleteProductSaleController = async (req: Request, resp:Response) => {
    try {
        const getId: number = Number(req.params.id)

        const deletedProduct = await deleteProductSaleService(getId)

        return resp.status(200).json(deletedProduct)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}