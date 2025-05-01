import { Router } from "express";
import { VehicleController } from "@/controllers/vehicle-controller";


const vehicleRoutes = Router()
const vehicleController = new VehicleController()



vehicleRoutes.post("/", vehicleController.create)

export{vehicleRoutes}