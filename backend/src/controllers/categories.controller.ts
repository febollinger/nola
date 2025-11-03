import type { Request, Response } from "express"
import { createCategoriesService, deleteCategoriesService, editCategoriesByIdService, getCategoriesByIdService, getCategoriesservice } from "../services/categories.service.js"

export const createCategoriesController = async (req: Request, resp: Response) => {
    try {
        const reqBody = req.body

        const newCategory = await createCategoriesService(reqBody)

        return resp.status(201).json(newCategory)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getCategoriesController = async (req: Request, resp: Response) => {
    try {
        const gettingCategories = await getCategoriesservice()

        return resp.status(200).json(gettingCategories)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getCategoriesByIdController = async (req: Request, resp: Response) => {
    try {
        const requestId: number | undefined= Number(req.params.id)
        const categoryById = await getCategoriesByIdService(requestId)

        return resp.status(200).json(categoryById)
    } catch (error: any) {
        return resp.status(404).json({message: error.message})
    }
}

export const editCategoriesByIdController = async (request: Request, response: Response) => {
    try {
        const getId: number = Number(request.params.id)
        const bodyData = request.body

        const editedCategory = await editCategoriesByIdService(getId, bodyData)

        return response.status(201).json(editedCategory)
    } catch (error: any) {
        return response.status(404).json({message: error.message})
    }
}

export const deleteCategorieController = async (req: Request, resp:Response) => {
    try {
        const getId: number = Number(req.params.id)

        const deletedCategory = await deleteCategoriesService(getId)

        return resp.status(200).json(deletedCategory)
    } catch (error: any) {
        return resp.status(404).json({message: error.message})
    }
}