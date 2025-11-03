import { Router } from "express"
import { createCouponController, deleteCouponController, editCouponByIdController, getCouponByIdController, getCouponController } from "../controllers/coupons.controller.js"

export const couponsRoute = Router()

couponsRoute.get("", getCouponController)
couponsRoute.get("/:id", getCouponByIdController)
couponsRoute.patch("/:id", editCouponByIdController)
couponsRoute.post("", createCouponController)
couponsRoute.get("/:id", deleteCouponController)