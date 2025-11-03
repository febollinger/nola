import type { Request, Response } from "express"
import { createDeliveryAddressesService, deleteDeliveryAddressesService, editDeliveryAddressesByIdService, getDeliveryAddressesByIdService, getDeliveryAddressesService } from "../services/deliveryAdresses.service.js"


export const createDeliveryAddressesController = async (req: Request, resp: Response) => {
    try {
        const reqBody = req.body

        const newAddresse = await createDeliveryAddressesService(reqBody)

        return resp.status(201).json(newAddresse)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getDeliveryAddressesController = async (req: Request, resp: Response) => {
    try {
        const page: number = Number(req.query.page)
        const totalPage: number = Number(req.query.pageSize) || 10
        const gettingAddresses = await getDeliveryAddressesService(page, totalPage)

        return resp.status(200).json(gettingAddresses)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getDeliveryAddressesByIdController = async (req: Request, resp: Response) => {
    try {
        const requestId: number | undefined= Number(req.params.id)
        const deliveryAddressesById = await getDeliveryAddressesByIdService(requestId)

        return resp.status(200).json(deliveryAddressesById)
    } catch (error: any) {
        return resp.status(404).json({message: error.message})
    }
}

export const editDeliveryAddressesByIdController = async (request: Request, response: Response) => {
    try {
        const getId: number = Number(request.params.id)
        const bodyData = request.body

        const editedAddresses = await editDeliveryAddressesByIdService(getId, bodyData)

        return response.status(201).json(editedAddresses)
    } catch (error: any) {
        return response.status(404).json({message: error.message})
    }
}

export const deleteDeliveryAddressesController = async (req: Request, resp:Response) => {
    try {
        const getId: number = Number(req.params.id)

        const deletedAddresses = await deleteDeliveryAddressesService(getId)

        return resp.status(200).json(deletedAddresses)
    } catch (error: any) {
        return resp.status(404).json({message: error.message})
    }
}