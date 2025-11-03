import { response } from "express"
import { getBrandsservice } from "../services/brands.service.js"

export const getBrandsController = () => {
    const gettingBrands = getBrandsservice()

    return response.status(200).json(gettingBrands)
}