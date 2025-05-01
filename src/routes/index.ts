import { Router} from "express"
import { usersRoutes } from "./users-routes"

import { sessionRoutes } from "./sessions-routes"
import { registersRoutes } from "./registers-routes"
import { vehicleRoutes } from "./vehicle-routes"
import { observationsRoutes } from "./observations-routes"

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/sessions", sessionRoutes)
routes.use("/registers", registersRoutes)
routes.use("/vehicle", vehicleRoutes)
routes.use("/observations", observationsRoutes)

export { routes}