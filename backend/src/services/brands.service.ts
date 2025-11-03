import type { Request, Response } from "express";
import { Repository, type DeepPartial } from "typeorm";
import { Brands } from "../entities/Brands.js";
import { AppDataSource } from "../data-source.js";

export const getBrandsservice = async () => {
    const brandsRepository: Repository<Brands> = AppDataSource.getRepository(Brands)

    const brands = await brandsRepository.find()
    return brands

}

export const getBrandsByIdService = async (requestId: number) => {
    const brandReposityory = AppDataSource.getRepository(Brands)

    const brandById = await brandReposityory.findBy({
        id: requestId
    })

    return brandById
}

export const editBrandsByIdService = async (getId: number, bodyData: Partial<Brands>) => {
    const brandRepository = AppDataSource.getRepository(Brands)

    const brandById = await brandRepository.findOne({
        where: {id: getId}
    })

    if(!brandById){
        throw new Error("Brand not found!")
    }

    const updating = brandRepository.merge(brandById, bodyData)

    const updatedBrand = await brandRepository.save(updating)

    return updatedBrand
}

export const createBrandService = async (reqBody: DeepPartial<Brands>[]) => {
    const brandRepository = AppDataSource.getRepository(Brands)

    const creatingBrand = brandRepository.create({
        ...reqBody
    })

    const savingBrand = await brandRepository.save(creatingBrand)
    
    return savingBrand
}


export const deleteBrandService = async (reqId: number) => {
    const brandRepository = AppDataSource.getRepository(Brands)

    const brandById = await brandRepository.findOne({
        where: {id: reqId}
    })

    if(!brandById){
        throw new Error("Brand not found!")
    }
    
    await brandRepository.delete(reqId)
}