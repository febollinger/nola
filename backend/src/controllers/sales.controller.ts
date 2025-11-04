import type { Request, Response } from "express";
import { getFilteredSalesService } from "../services/sales.service.js";

export const getSalesController = async (req: Request, res: Response) => {
  try {
    const { productId, channel, startDate, endDate, skip, take } = req.query;

    const salesFiltered = await getFilteredSalesService({
      productId: productId ? Number(productId) : undefined,
      channel: channel as string | undefined,
      startDate: startDate as string | undefined,
      endDate: endDate as string | undefined,
      skip: skip ? Number(skip) : undefined,
      take: take ? Number(take) : undefined,
    });

    res.json(salesFiltered);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
