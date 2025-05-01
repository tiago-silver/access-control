import { Router } from "express";
import { ObservationsController } from "@/controllers/observations-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";

const observationsRoutes = Router()
const observationsController = new ObservationsController()

observationsRoutes.use(ensureAuthenticated)

observationsRoutes.post("/", observationsController.create)
observationsRoutes.get("/", observationsController.index)

export{observationsRoutes}