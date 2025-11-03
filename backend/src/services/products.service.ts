import type { Repository } from "typeorm"
import { AppDataSource } from "../data-source.js"
import { Products } from "../entities/Products.js"

export const getProductsService = async (page: number, totalPage: number) => {
    const productReposityory: Repository<Products> = AppDataSource.getRepository(Products)

    const pageToNumber = isNaN(Number(page)) ? 1 : Number(page)
    const totalPageNumber = isNaN(Number(totalPage)) ? 10 : Number(totalPage)

    const allProducts = await productReposityory.find({
        skip:(pageToNumber - 1) * totalPageNumber,
        take:totalPageNumber,
        order: {id: "ASC"}
    })
    return allProducts

}

export const getProductsByIdService = async (requestId: number) => {
    const productReposityory: Repository<Products> = AppDataSource.getRepository(Products)

    const productById = await productReposityory.findBy({
        id: requestId
    })

    return productById
}

export const editProductByIdByIdService = async (getId: number, bodyData: Partial<Products>) => {
    const productReposityory: Repository<Products> = AppDataSource.getRepository(Products)

    const productById = await productReposityory.findOne({
        where: {id: getId}
    })

    if(!productById){
        throw new Error("product not found!")
    }

    const updating = productReposityory.merge(productById, bodyData)

    const updatedProduct = await productReposityory.save(updating)

    return updatedProduct
}


export const deleteProductService = async (reqId: number) => {
    const productReposityory = AppDataSource.getRepository(Products)

    const productById = await productReposityory.findOne({
        where: {id: reqId}
    })

    if(!productById){
        throw new Error("product not found!")
    }
    
    await productReposityory.softRemove(productById)
}