import { Router } from "express";
import { createChannelController, editChannelByIdController, getChannelByIdController, getChannelController } from "../controllers/channels.controller.js";

export const channelsRoute = Router()

channelsRoute.get("", getChannelController)
channelsRoute.get("/:id", getChannelByIdController)
channelsRoute.post("", createChannelController)
channelsRoute.patch("/:id", editChannelByIdController)
