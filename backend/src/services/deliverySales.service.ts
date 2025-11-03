import type { DeepPartial, Repository } from "typeorm"
import { AppDataSource } from "../data-source.js"
import { DeliverySales } from "../entities/DeliverySales.js"

export const createDeliverySalesService = async (reqBody: DeepPartial<DeliverySales>[]) => {
    const deliverySaleRepository: Repository<DeliverySales> = AppDataSource.getRepository(DeliverySales)

    const creatingDeliverySale = deliverySaleRepository.create({
        ...reqBody
    })

    const saving = await deliverySaleRepository.save(creatingDeliverySale)
    
    return saving
}

export const getDeliverySalesService = async (page: number = 1, totalPage: number = 10) => {
    const deliverySaleRepository: Repository<DeliverySales> = AppDataSource.getRepository(DeliverySales)

    const pageToNumber = isNaN(Number(page)) ? 1 : Number(page)
    const totalPageNumber = isNaN(Number(totalPage)) ? 10 : Number(totalPage)

    const allDeliverySale = await deliverySaleRepository.find({
        skip:(pageToNumber - 1) * totalPageNumber,
        take:totalPageNumber,
        order: {id: "ASC"}
    })
    return allDeliverySale

}

export const getDeliverySalesByIdService = async (requestId: number) => {
    const deliverySaleRepository: Repository<DeliverySales> = AppDataSource.getRepository(DeliverySales)

    const deliverySalesById = await deliverySaleRepository.findBy({
        id: requestId
    })

    return deliverySalesById
}

export const editDeliverySalesByIdService = async (getId: number, bodyData: Partial<DeliverySales>) => {
    const deliverySaleRepository: Repository<DeliverySales> = AppDataSource.getRepository(DeliverySales)

    const deliverySaleById = await deliverySaleRepository.findOne({
        where: {id: getId}
    })

    if(!deliverySaleById){
        throw new Error("Delivery Sale not found!")
    }

    const updating = deliverySaleRepository.merge(deliverySaleById, bodyData)

    const updatedDeliverySale = await deliverySaleRepository.save(updating)

    return updatedDeliverySale
}
