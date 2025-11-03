import type { Request, Response } from "express"
import { deleteProductService, editProductByIdByIdService, getProductsByIdService, getProductsService } from "../services/products.service.js"

export const getProductsController = async (req: Request, resp: Response
) => {
    try {
        const page: number = Number(req.query.page)
        const totalPage: number = Number(req.query.pageSize) || 10
        const gettingProducts = await getProductsService(page, totalPage)

        return resp.status(200).json(gettingProducts)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getProductByIdController = async (req: Request, resp: Response) => {
    try {
        const requestId: number | undefined= Number(req.params.id)
        const productById = await getProductsByIdService(requestId)

        return resp.status(200).json(productById)
    } catch (error: any) {
        return resp.status(404).json({message: error.message})
    }
}

export const editProductByIdController = async (request: Request, response: Response) => {
    try {
        const getId: number = Number(request.params.id)
        const bodyData = request.body

        const editedProduct = await editProductByIdByIdService(getId, bodyData)

        return response.status(201).json(editedProduct)
    } catch (error: any) {
        return response.status(404).json({message: error.message})
    }
}

export const deleteProductController = async (req: Request, resp:Response) => {
    try {
        const getId: number = Number(req.params.id)

        const deletedProduct = await deleteProductService(getId)

        return resp.status(200).json(deletedProduct)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}