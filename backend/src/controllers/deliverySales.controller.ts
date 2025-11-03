import type { Request, Response } from "express"
import { createDeliverySalesService, editDeliverySalesByIdService, getDeliverySalesByIdService, getDeliverySalesService } from "../services/deliverySales.service.js"

export const createDeliverySalesController = async (req: Request, resp: Response) => {
    try {
        const reqBody = req.body

        const createDeliverySale= await createDeliverySalesService(reqBody)

        return resp.status(201).json(createDeliverySale)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getDeliverySalesController = async (req: Request, resp: Response) => {
    try {
        const page: number = Number(req.query.page)
        const totalPage: number = Number(req.query.pageSize) || 10
        const gettingDeliverySales = await getDeliverySalesService(page, totalPage)

        return resp.status(200).json(gettingDeliverySales)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getDeliverySalesByIdController = async (req: Request, resp: Response) => {
    try {
        const requestId: number | undefined= Number(req.params.id)
        const deliverySalesById = await getDeliverySalesByIdService(requestId)

        return resp.status(200).json(deliverySalesById)
    } catch (error: any) {
        return resp.status(404).json({message: error.message})
    }
}

export const editDeliverySalesByIdController = async (request: Request, response: Response) => {
    try {
        const getId: number = Number(request.params.id)
        const bodyData = request.body

        const editedDeliverySale = await editDeliverySalesByIdService(getId, bodyData)

        return response.status(201).json(editedDeliverySale)
    } catch (error: any) {
        return response.status(404).json({message: error.message})
    }
}
