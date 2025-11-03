import type { Request, Response } from "express"
import { getStoreByIdService, getStoreservice } from "../services/stores.service.js"

export const getStoreController = async (req: Request, resp: Response) => {
    try {
        const page: number = Number(req.query.page)
        const totalPage: number = Number(req.query.pageSize)
        const gettingStore = await getStoreservice(page, totalPage)

        return resp.status(200).json(gettingStore)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getStoreByIdController = async (req: Request, resp: Response) => {
    try {
        const requestId: number | undefined= Number(req.params.id)
        const gettingStoreById = await getStoreByIdService(requestId)

        return resp.status(200).json(gettingStoreById)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}