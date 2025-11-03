import type { DeepPartial, Repository } from "typeorm"
import { AppDataSource } from "../data-source.js"
import { DeliveryAddresses } from "../entities/DeliveryAddresses.js"

export const createDeliveryAddressesService = async (reqBody: DeepPartial<DeliveryAddresses>[]) => {
    const deliveryAddressesRepository: Repository<DeliveryAddresses> = AppDataSource.getRepository(DeliveryAddresses)

    const creatingDeliveryAddresses = deliveryAddressesRepository.create({
        ...reqBody
    })

    const saving = await deliveryAddressesRepository.save(creatingDeliveryAddresses)
    
    return saving
}

export const getDeliveryAddressesService = async (page: number = 1, totalPage: number = 10) => {
    const deliveryAddressesRepository: Repository<DeliveryAddresses> = AppDataSource.getRepository(DeliveryAddresses)

    const pageToNumber = isNaN(Number(page)) ? 1 : Number(page)
    const totalPageNumber = isNaN(Number(totalPage)) ? 10 : Number(totalPage)

    const allDeliveryAddresses = await deliveryAddressesRepository.find({
        skip:(pageToNumber - 1) * totalPageNumber,
        take:totalPageNumber,
        order: {id: "ASC"}
    })
    return allDeliveryAddresses

}

export const getDeliveryAddressesByIdService = async (requestId: number) => {
    const deliveryAddressesRepository: Repository<DeliveryAddresses> = AppDataSource.getRepository(DeliveryAddresses)

    const deliveryAddressesById = await deliveryAddressesRepository.findBy({
        id: requestId
    })

    return deliveryAddressesById
}

export const editDeliveryAddressesByIdService = async (getId: number, bodyData: Partial<DeliveryAddresses>) => {
    const deliveryAddressesRepository = AppDataSource.getRepository(DeliveryAddresses)

    const deliveryAddressesById = await deliveryAddressesRepository.findOne({
        where: {id: getId}
    })

    if(!deliveryAddressesById){
        throw new Error("Delivery Address not found!")
    }

    const updating = deliveryAddressesRepository.merge(deliveryAddressesById, bodyData)

    const updatedDeliveryAddresses = await deliveryAddressesRepository.save(updating)

    return updatedDeliveryAddresses
}


export const deleteDeliveryAddressesService = async (reqId: number) => {
    const deliveryAddressesRepository: Repository<DeliveryAddresses> = AppDataSource.getRepository(DeliveryAddresses)

    const deliveryAddressesById = await deliveryAddressesRepository.findOne({
        where: {id: reqId}
    })

    if(!deliveryAddressesById){
        throw new Error("Delivery Address not found!")
    }
    
    await deliveryAddressesRepository.remove(deliveryAddressesById)
}