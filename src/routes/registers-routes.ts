import { Router } from "express";
import { RegistersController } from "@/controllers/registers-controller";


const registersRoutes = Router()
const registersController = new RegistersController()



registersRoutes.post("/", registersController.create)
registersRoutes.get("/", registersController.index)
registersRoutes.get("/show", registersController.show)
registersRoutes.put("/:register_id/exit", registersController.update)

export{registersRoutes}