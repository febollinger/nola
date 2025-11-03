import type { Request, Response } from "express";
import { Repository } from "typeorm";
import { Brands } from "../entities/Brands.js";
import { AppDataSource } from "../data-source.js";

export const getBrandsservice = async () => {
    const brandsRepository: Repository<Brands> = AppDataSource.getRepository(Brands)

    const brands = await brandsRepository.find()
    return brands

}