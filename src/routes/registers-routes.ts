import { Router } from "express";
import { RegistersController } from "@/controllers/registers-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";

const registersRoutes = Router()
const registersController = new RegistersController()

registersRoutes.use(ensureAuthenticated)

registersRoutes.post("/", registersController.create)
registersRoutes.get("/", registersController.index)
registersRoutes.put("/:register_id/exit", registersController.update)

export{registersRoutes}