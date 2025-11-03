import type { DeepPartial, Repository } from "typeorm"
import { AppDataSource } from "../data-source.js"
import { Categories } from "../entities/Categories.js"

export const createCategoriesService = async (reqBody: DeepPartial<Categories>[]) => {
    const categoryRepository = AppDataSource.getRepository(Categories)

    const creatingCategory = categoryRepository.create({
        ...reqBody
    })

    const saving = await categoryRepository.save(creatingCategory)
    
    return saving
}

export const getCategoriesservice = async () => {
    const categoryRepository: Repository<Categories> = AppDataSource.getRepository(Categories)

    const categories = await categoryRepository.find()
    return categories

}

export const getCategoriesByIdService = async (requestId: number) => {
    const categoryReposityory = AppDataSource.getRepository(Categories)

    const categoryById = await categoryReposityory.findBy({
        id: requestId
    })

    return categoryById
}

export const editCategoriesByIdService = async (getId: number, bodyData: Partial<Categories>) => {
    const categoryReposityory = AppDataSource.getRepository(Categories)

    const categoryById = await categoryReposityory.findOne({
        where: {id: getId}
    })

    if(!categoryById){
        throw new Error("Category not found!")
    }

    const updating = categoryReposityory.merge(categoryById, bodyData)

    const updatedCategory = await categoryReposityory.save(updating)

    return updatedCategory
}


export const deleteCategoriesService = async (reqId: number) => {
    const categoryReposityory = AppDataSource.getRepository(Categories)

    const categoryById = await categoryReposityory.findOne({
        where: {id: reqId}
    })

    if(!categoryById){
        throw new Error("Category not found!")
    }
    
    await categoryReposityory.softRemove(categoryById)
}