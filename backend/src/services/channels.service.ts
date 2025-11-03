import type { DeepPartial, Repository } from "typeorm"
import { AppDataSource } from "../data-source.js"
import { Channels } from "../entities/Channels.js"


export const createChannelService = async (reqBody: DeepPartial<Channels>[]) => {
    const channelsRepository = AppDataSource.getRepository(Channels)

    const creatingChannels = channelsRepository.create({
        ...reqBody
    })

    const saving = await channelsRepository.save(creatingChannels)
    
    return saving
}

export const getChannelService = async () => {
    const channelsRepository: Repository<Channels> = AppDataSource.getRepository(Channels)

    const channelsFind = await channelsRepository.find()
    return channelsFind
}

export const getChannelByIdService = async (requestId: number) => {
    const channelsRepository = AppDataSource.getRepository(Channels)

    const channelById = await channelsRepository.findBy({
        id: requestId
    })

    return channelById
}

export const editChannelByIdService = async (getId: number, bodyData: Partial<Channels>) => {
    const channelsRepository = AppDataSource.getRepository(Channels)

    const channelById = await channelsRepository.findOne({
        where: {id: getId}
    })

    if(!channelById){
        throw new Error("Channel not found!")
    }

    const updating = channelsRepository.merge(channelById, bodyData)

    const updatedChannel = await channelsRepository.save(updating)

    return updatedChannel
}
