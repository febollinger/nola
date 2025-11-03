import type { DeepPartial, Repository } from "typeorm"
import { AppDataSource } from "../data-source.js"
import { ItemItemProductSales } from "../entities/ItemItemProductSales.js"

export const getItemProductSaleDetailsService = async () => {
    const ItemProductDetailsRepository: Repository<ItemItemProductSales> = AppDataSource.getRepository(ItemItemProductSales)

    const itemProductDetail = await ItemProductDetailsRepository.find()
    return itemProductDetail

}

export const getItemProductSaleDetailsByIdService = async (requestId: number) => {
    const ItemProductDetailsRepository = AppDataSource.getRepository(ItemItemProductSales)

    const getId = await ItemProductDetailsRepository.findBy({
        id: requestId
    })

    return getId
}

export const editItemProductSaleDetailsByIdService = async (getId: number, bodyData: Partial<ItemItemProductSales>) => {
    const ItemProductDetailsRepository = AppDataSource.getRepository(ItemItemProductSales)

    const itemProductDetailId = await ItemProductDetailsRepository.findOne({
        where: {id: getId}
    })

    if(!itemProductDetailId){
        throw new Error("Item product not found!")
    }

    const updating = ItemProductDetailsRepository.merge(itemProductDetailId, bodyData)

    const updatedItemDetails = await ItemProductDetailsRepository.save(updating)

    return updatedItemDetails
}

export const createItemProductSaleDetailsService = async (reqBody: DeepPartial<ItemItemProductSales>[]) => {
    const ItemProductDetailsRepository = AppDataSource.getRepository(ItemItemProductSales)

    const creatingItemDatail= ItemProductDetailsRepository.create({
        ...reqBody
    })

    const savingItemDetail = await ItemProductDetailsRepository.save(creatingItemDatail)
    
    return savingItemDetail
}


export const deleteItemProductSaleDetailsService = async (reqId: number) => {
    const ItemProductDetailsRepository = AppDataSource.getRepository(ItemItemProductSales)

    const itemProductDetailId = await ItemProductDetailsRepository.findOne({
        where: {id: reqId}
    })

    if(!itemProductDetailId){
        throw new Error("Item product not found!")
    }
    
    await ItemProductDetailsRepository.delete(reqId)
}