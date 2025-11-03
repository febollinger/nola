import type { DeepPartial, Repository } from "typeorm"
import { AppDataSource } from "../data-source.js"
import { Customers } from "../entities/Customers.js"
import { Sales } from "../entities/Sales.js"



export const getLoyalCustomersService = async (page: number = 1, limit: number = 10) => {
  const salesRepository = AppDataSource.getRepository(Sales);

  const pageToNumber = Number(page) && Number(page) > 0 ? Number(page) : 1;
  const totalPageNumber = Number(limit) && Number(limit) > 0 ? Number(limit) : 10;

  const skip = (pageToNumber - 1) * totalPageNumber

  const loyalCustomers = await salesRepository
    .createQueryBuilder("sale")
    .leftJoin("sale.customer", "customer")
    .select("customer.id", "id")
    .addSelect("customer.customerName", "name")
    .addSelect("COUNT(sale.id)", "total_amount")
    .groupBy("customer.id")
    .having("COUNT(sale.id) >= :minSales", { minSales: 3 })
    .orderBy("total_amount", "DESC")
    .skip(skip)
    .take(totalPageNumber)
    .getRawMany();

  return {page, limit, results: loyalCustomers.length, data: loyalCustomers}
};


export const createCustomersService = async (reqBody: DeepPartial<Customers>[]) => {
    const costumersRepository: Repository<Customers> = AppDataSource.getRepository(Customers)

    const creatingCostumers = costumersRepository.create({
        ...reqBody
    })

    const saving = await costumersRepository.save(creatingCostumers)
    
    return saving
}

export const getCustomersService = async () => {
    const costumersRepository: Repository<Customers> = AppDataSource.getRepository(Customers)

    const channelsFind = await costumersRepository.find()
    return channelsFind
}

export const getCustomersByIdService = async (requestId: number) => {
    const costumersRepository: Repository<Customers> = AppDataSource.getRepository(Customers)

    const channelById = await costumersRepository.findBy({
        id: requestId
    })

    return channelById
}

export const editCustomersByIdService = async (getId: number, bodyData: Partial<Customers>) => {
    const costumersRepository: Repository<Customers> = AppDataSource.getRepository(Customers)

    const channelById = await costumersRepository.findOne({
        where: {id: getId}
    })

    if(!channelById){
        throw new Error("Costumer not found!")
    }

    const updating = costumersRepository.merge(channelById, bodyData)

    const updatedChannel = await costumersRepository.save(updating)

    return updatedChannel
}
