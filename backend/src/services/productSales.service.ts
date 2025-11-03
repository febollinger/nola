import type { Repository } from "typeorm"
import { AppDataSource } from "../data-source.js"
import { ProductSales } from "../entities/ProductSales.js"

export const getProductSalesService = async (page: number, totalPage: number) => {
    const productReposityory: Repository<ProductSales> = AppDataSource.getRepository(ProductSales)
    const pageToNumber = isNaN(Number(page)) ? 1 : Number(page)
    const totalPageNumber = isNaN(Number(totalPage)) ? 10 : Number(totalPage)

    const allProductsSale = await productReposityory.find({
        skip:(pageToNumber - 1) * totalPageNumber,
        take:totalPageNumber,
        order: {id: "ASC"}
    })


    return allProductsSale

}

export const getProductsSaleByIdService = async (requestId: number) => {
    const productReposityory: Repository<ProductSales> = AppDataSource.getRepository(ProductSales)

    const productById = await productReposityory.findBy({
        id: requestId
    })

    return productById
}

export const editProductSaleByIdByIdService = async (getId: number, bodyData: Partial<ProductSales>) => {
    const productReposityory: Repository<ProductSales> = AppDataSource.getRepository(ProductSales)

    const productById = await productReposityory.findOne({
        where: {id: getId}
    })

    if(!productById){
        throw new Error("product sale not found!")
    }

    const updating = productReposityory.merge(productById, bodyData)

    const updatedProduct = await productReposityory.save(updating)

    return updatedProduct
}


export const deleteProductSaleService = async (reqId: number) => {
    const productReposityory: Repository<ProductSales> = AppDataSource.getRepository(ProductSales)

    const productById = await productReposityory.findOne({
        where: {id: reqId}
    })

    if(!productById){
        throw new Error("product sale not found!")
    }
    
    await productReposityory.softRemove(productById)
}