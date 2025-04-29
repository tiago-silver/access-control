import { prisma } from "@/database/prisma";
import { AppError } from "@/utils/AppError";
import { compare } from "bcrypt";
import { Request, Response } from "express";
import { z } from "zod"
import { authConfig } from "@/config/auth";
import { sign} from "jsonwebtoken"

class SessionsController {
    async create(request: Request, response: Response){

        
        const bodySchema = z.object({
            registration: z.string().trim().min(6),
            password: z.string().trim().min(6)
        })

        const { registration, password} = bodySchema.parse(request.body)

        const user = await prisma.user.findFirst({where: {registration}})

        if(!user){
            throw new AppError("Registration or password invalid!",401)
        }

        const passwordMatched = await compare(password, user.password)

        if(!passwordMatched) {
            throw new AppError("Registration or password invalid!", 401)
        }


        const {secret, expiresIn} = authConfig.jwt

        const token = sign({role: user.role ?? "doorman"},secret, {
            subject: user.id,
            expiresIn
        })

        const {password:hashedPassword, ...userWithOutPassword} = user


        return response.json({token, user: userWithOutPassword})

    }
}

export {SessionsController}