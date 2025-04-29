import { Request,  Response } from "express";
import {z} from "zod"

class UsersController {
    async create(request:Request, response:Response){

        const bodySchema = z.object({
            name: z.string().trim().min(3),
            registration: z.string().trim().min(6),
            password: z.string().min(6)
        })

        const {name, registration, password} = bodySchema.parse(request.body)
        return response.json({message: "OK"})
    }
}

export { UsersController}