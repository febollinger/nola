import type { Request, Response } from "express"
import { createChannelService, editChannelByIdService, getChannelByIdService, getChannelService } from "../services/channels.service.js"

export const createChannelController = async (req: Request, resp: Response) => {
    try {
        const reqBody = req.body

        const newChannel = await createChannelService(reqBody)

        return resp.status(201).json(newChannel)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getChannelController = async (req: Request, resp: Response) => {
    try {
        const gettingChannels = await getChannelService()

        return resp.status(200).json(gettingChannels)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getChannelByIdController = async (req: Request, resp: Response) => {
    try {
        const requestId: number | undefined= Number(req.params.id)
        const channelById = await getChannelByIdService(requestId)

        return resp.status(200).json(channelById)
    } catch (error: any) {
        return resp.status(404).json({message: error.message})
    }
}

export const editChannelByIdController = async (request: Request, response: Response) => {
    try {
        const getId: number = Number(request.params.id)
        const bodyData = request.body

        const editedChanel = await editChannelByIdService(getId, bodyData)

        return response.status(201).json(editedChanel)
    } catch (error: any) {
        return response.status(404).json({message: error.message})
    }
}
