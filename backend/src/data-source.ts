import "dotenv/config";
import { DataSource } from "typeorm";
import { Brands } from "./entities/Brands.js";
import { SubBrands } from "./entities/SubBrands.js";
import { Categories } from "./entities/Categories.js";
import { Channels } from "./entities/Channels.js";
import { Coupons } from "./entities/Coupons.js";
import { CouponSales } from "./entities/CouponSales.js";
import { Customers } from "./entities/Customers.js";
import { DeliveryAddresses } from "./entities/DeliveryAddresses.js";
import { DeliverySales } from "./entities/DeliverySales.js";
import { ItemItemProductSales } from "./entities/ItemItemProductSales.js";
import { ItemProductSales } from "./entities/ItemProductSales.js";
import { Items } from "./entities/Items.js";
import { OptionGroups } from "./entities/OptionGroups.js";
import { Payments } from "./entities/Payments.js";
import { PaymentTypes } from "./entities/PaymentTypes.js";
import { Products } from "./entities/Products.js";
import { ProductSales } from "./entities/ProductSales.js";
import { Sales } from "./entities/Sales.js";
import { Stores } from "./entities/Stores.js";

if (!process.env.DATABASE_URL){
        throw new Error("DATABASE is not defined.")
    }

export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize:false,
    logging: true,
    entities:[Brands, SubBrands, Categories, Channels, Coupons, CouponSales, Customers, DeliveryAddresses, DeliverySales, ItemItemProductSales, ItemProductSales, Items, OptionGroups, Payments, PaymentTypes, Products, ProductSales, Sales, Stores]
})

