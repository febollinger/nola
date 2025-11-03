import { Router } from "express";
import { getChannelsController } from "../controllers/channels.controller.js";

export const channelsRoute = Router()

channelsRoute.get("/", getChannelsController)