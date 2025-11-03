import express from "express";
import { analyticsRouter } from "./routers/analytics.router.js";

export const app = express()
app.use(express.json())

analyticsRouter.use("/home", analyticsRouter)