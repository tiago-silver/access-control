import { Request, Response } from "express";
import { z } from "zod";

import {prisma} from "@/database/prisma"



class RegistersController {
    async create(request: Request, response: Response){

        const bodySchema = z.object({
            name: z.string().trim().min(3),
            destination: z.enum(["A", "B", "C", "D"]),
            authorized_by: z.string().trim().min(3),
            observation: z.string().max(500).optional(),
            user_id: z.string().uuid()
        })

        const {name, destination, authorized_by, observation, user_id} = bodySchema.parse(request.body)

        const userWithThisUserId = await prisma.user.findFirst({where : {id:user_id}})
        
        if(!userWithThisUserId){
            return response.status(404).json({message: "User not found!"})
        }

        await prisma.register.create({
            data: {
                name,
                destination,
                authorizedBy: authorized_by,
                observation,
                userId: user_id
            }
        })

        return response.json({message: "Ok"})
    }

    async index(request: Request, response: Response){

        const registers = await prisma.register.findMany({
                select: {
                    name: true,
                    destination: true,
                    authorizedBy: true,
                    observation: true,
                    entry: true,
                    exit: true,
                    
                    user: {
                        select: {
                            name: true,
                            registration: true
                        }
                    },

                    vehicle: {
                        select: {
                            plate: true
                        }
                    }
                }
            
        })

       

        return response.json(registers)
    }

    async update(request: Request, response: Response){
        const paramsSchema = z.object({
            register_id: z.string().uuid()
        })

        const {register_id} = paramsSchema.parse(request.params)

        const registerWithThisId = await prisma.register.findFirst({where : {id:register_id}})

        if(!registerWithThisId){
            return response.status(404).json({message: "Register not found!"})
        }
        
        await prisma.register.update({
            data: {
                exit: new Date()
            },
            where: {
                id: register_id
            }
        })


        return response.json()
    }

}

export{RegistersController}