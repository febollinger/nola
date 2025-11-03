import type { Response, Request } from "express"
import { createBrandService, deleteBrandService, editBrandsByIdService, getBrandsByIdService, getBrandsservice } from "../services/brands.service.js"

export const getBrandsController = async (req: Request, resp: Response) => {
    try {
        const gettingBrands = await getBrandsservice()

        return resp.status(200).json(gettingBrands)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getBrandsByIdController = async (req: Request, resp: Response) => {
    try {
        const requestId: number | undefined= Number(req.params.id)
        const gettingBrandById = await getBrandsByIdService(requestId)

        return resp.status(200).json(gettingBrandById)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const editBrandsByIdController = async (request: Request, response: Response) => {
    try {
        const getId: number = Number(request.params.id)
        const bodyData = request.body

        const editedBrand = await editBrandsByIdService(getId, bodyData)

        return response.status(201).json(editedBrand) 
    } catch (error: any) {
        return response.status(404).json({message: error.message})
    }
}

export const createBrandController = async (req: Request, resp: Response) => {
    try {
        const reqBody = req.body

        const newBrand = await createBrandService(reqBody)

        return resp.status(201).json(newBrand)
        
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const deleteBrandController = async (req: Request, resp:Response) => {
    try {
        const getId: number = Number(req.params.id)

        const deletedBrand = await deleteBrandService(getId)

        return resp.status(200).json(deletedBrand)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}