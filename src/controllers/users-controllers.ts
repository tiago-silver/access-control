import { Request,  Response } from "express";
import {z} from "zod"

import {prisma} from "@/database/prisma"
import { AppError } from "@/utils/AppError";

import { hash} from "bcrypt"

class UsersController {
    async create(request:Request, response:Response){

        const bodySchema = z.object({
            name: z.string().trim().min(3),
            registration: z.string().trim().min(6),
            password: z.string().min(6)
        })

        const {name, registration, password} = bodySchema.parse(request.body)

        const userWithSameRegistration = await prisma.user.findFirst({where: {registration}})

        if(userWithSameRegistration){
            throw new AppError("User with the same registration already exist")
        }

        const hashedPassword = await hash(password, 8)

        const user = await prisma.user.create({
            data : {
                name,
                registration,
                password: hashedPassword
            }
        })

        const {password:_, ...userWithOutPassword} = user

        return response.status(201).json(userWithOutPassword)
    }
}

export { UsersController}