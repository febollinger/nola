import type { DeepPartial, Repository } from "typeorm"
import { AppDataSource } from "../data-source.js"
import { Stores } from "../entities/Stores.js"

export const getStoreservice = async (page: number, totalPage: number) => {
    const storeReposityory: Repository<Stores> = AppDataSource.getRepository(Stores)

    const pageToNumber = isNaN(Number(page)) ? 1 : Number(page)
    const totalPageNumber = isNaN(Number(totalPage)) ? 10 : Number(totalPage)

    const brands = await storeReposityory.find({
        skip:(pageToNumber - 1) * totalPageNumber,
        take:totalPageNumber,
        order: {id: "ASC"}
    })
    return brands

}

export const getStoreByIdService = async (requestId: number) => {
    const storeReposityory: Repository<Stores> = AppDataSource.getRepository(Stores)

    const storeById = await storeReposityory.findBy({
        id: requestId
    })

    return storeById
}