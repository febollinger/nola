import type { Request, Response } from "express"
import { createCouponService, getCouponservice, getCouponByIdService, editCouponByIdService, deleteCouponService } from "../services/coupons.service.js"

export const createCouponController = async (req: Request, resp: Response) => {
    try {
        const reqBody = req.body

        const newCoupon = await createCouponService(reqBody)

        return resp.status(201).json(newCoupon)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getCouponController = async (req: Request, resp: Response) => {
    try {
        const gettingCoupons = await getCouponservice()

        return resp.status(200).json(gettingCoupons)
    } catch (error:any) {
        return resp.status(404).json({message: error.message})
    }
}

export const getCouponByIdController = async (req: Request, resp: Response) => {
    try {
        const requestId: number | undefined= Number(req.params.id)
        const couponById = await getCouponByIdService(requestId)

        return resp.status(200).json(couponById)
    } catch (error: any) {
        return resp.status(404).json({message: error.message})
    }
}

export const editCouponByIdController = async (request: Request, response: Response) => {
    try {
        const getId: number = Number(request.params.id)
        const bodyData = request.body

        const editedCoupon = await editCouponByIdService(getId, bodyData)

        return response.status(201).json(editedCoupon)
    } catch (error: any) {
        return response.status(404).json({message: error.message})
    }
}

export const deleteCouponController = async (req: Request, resp:Response) => {
    try {
        const getId: number = Number(req.params.id)

        const deletedCoupon = await deleteCouponService(getId)

        return resp.status(200).json(deletedCoupon)
    } catch (error: any) {
        return resp.status(404).json({message: error.message})
    }
}