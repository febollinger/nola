import "reflect-metadata";

import express from "express";
import { brandsRouter } from "./routes/brands.route.js";
import { categoriesRouter } from "./routes/categories.route.js";
import { channelsRoute } from "./routes/channels.route.js";
import { costumersRoute } from "./routes/costumers.route.js";
import { couponsRoute } from "./routes/coupons.route.js";
import { deliveryAdressesRoute } from "./routes/deliveryAdresses.route.js";
import { deliverySalesRoute } from "./routes/deliverySales.route.js";
import { itemProductSaleRoute } from "./routes/itemProductSale.route.js";
import { itemsRoute } from "./routes/items.route.js";
import { paymentsRoute } from "./routes/payments.route.js";
import { productsRoute } from "./routes/products.route.js";
import { salesRoute } from "./routes/sales.route.js";
import { storesRoute } from "./routes/stores.route.js";

export const app = express()
app.use(express.json())

//brands and sub brands
app.use("/brands", brandsRouter)
app.use("/categories", categoriesRouter)
app.use("/channels", channelsRoute)
app.use("/costumers", costumersRoute)
app.use("/coupons", couponsRoute)
app.use("/deliveryAdresses", deliveryAdressesRoute)
app.use("/delivery", deliverySalesRoute)
//Item Product sale e item product sale details
app.use("/itemSale", itemProductSaleRoute)
app.use("/items", itemsRoute)
//payments and payments types
app.use("/payments", paymentsRoute)
//products and products sale
app.use("/products", productsRoute)
app.use("/sales", salesRoute)
app.use("/stores", storesRoute)