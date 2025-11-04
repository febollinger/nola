import { Repository } from "typeorm";
import { AppDataSource } from "../data-source.js"
import { Sales } from "../entities/Sales.js";

export const getFilteredSalesService = async (filters: any) => {
  const salesRepository: Repository<Sales> = AppDataSource.getRepository(Sales);

  const getSales = salesRepository.createQueryBuilder("sales")
    .leftJoinAndSelect("sales.productSales", "product");

  if (filters.productId) getSales.andWhere("product.id = :productId", { productId: filters.productId })
  if (filters.channel) {
    getSales.andWhere(
      "sales.channel_id = (SELECT id FROM channels WHERE name = :channelName LIMIT 1)",
      { channelName: filters.channel }
    );
  }
  if (filters.startDate) getSales.andWhere("sales.createdAt >= :startDate", { startDate: filters.startDate })
  if (filters.endDate) getSales.andWhere("sales.createdAt <= :endDate", { endDate: filters.endDate })

  getSales.orderBy("sales.createdAt", "DESC")


  const page = filters.page && filters.page > 0 ? filters.page : 1;
  const limit = filters.limit && filters.limit > 0 ? Math.min(filters.limit, 100) : 10;
  const skip = (page - 1) * limit

  getSales.skip(skip).take(limit)

  const [data, total] = await getSales.getManyAndCount()
    
  return {
    data,
    total,
    page,
    lastPage: Math.ceil(total / limit),
  };
};
