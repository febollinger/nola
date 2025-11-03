import type { DeepPartial, Repository } from "typeorm"
import { AppDataSource } from "../data-source.js"
import { Coupons } from "../entities/Coupons.js"

export const createCouponService = async (reqBody: DeepPartial<Coupons>[]) => {
    const couponsRepository: Repository<Coupons> = AppDataSource.getRepository(Coupons)

    const creatingCoupons = couponsRepository.create({
        ...reqBody
    })

    const saving = await couponsRepository.save(creatingCoupons)
    
    return saving
}

export const getCouponservice = async () => {
    const couponsRepository: Repository<Coupons> = AppDataSource.getRepository(Coupons)

    const getCoupons = await couponsRepository.find()
    return getCoupons

}

export const getCouponByIdService = async (requestId: number) => {
    const couponsRepository: Repository<Coupons> = AppDataSource.getRepository(Coupons)

    const couponsById = await couponsRepository.findBy({
        id: requestId
    })

    return couponsById
}

export const editCouponByIdService = async (getId: number, bodyData: Partial<Coupons>) => {
    const couponsRepository = AppDataSource.getRepository(Coupons)

    const couponsById = await couponsRepository.findOne({
        where: {id: getId}
    })

    if(!couponsById){
        throw new Error("Category not found!")
    }

    const updating = couponsRepository.merge(couponsById, bodyData)

    const updatedCoupons = await couponsRepository.save(updating)

    return updatedCoupons
}


export const deleteCouponService = async (reqId: number) => {
    const couponsRepository = AppDataSource.getRepository(Coupons)

    const couponById = await couponsRepository.findOne({
        where: {id: reqId}
    })

    if(!couponById){
        throw new Error("Category not found!")
    }
    
    await couponsRepository.softRemove(couponById)
}