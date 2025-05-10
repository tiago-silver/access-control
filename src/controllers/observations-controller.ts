import { Request, Response } from "express";

import { prisma } from "@/database/prisma";
import { z } from "zod";


class ObservationsController {

    async create(request: Request, response: Response){
        const bodySchema = z.object({
            title: z.string(),
            description: z.string(),
            
        })

        const {title, description} = bodySchema.parse(request.body)

        if(!request.user){
            return response.status(404).json({message: "Usuário nao encontrado!"})
        }

        await prisma.observation.create({
            data: {
                title,
                description,
                userId: request.user.id
            }
        })

        return response.json()
    }

    async index(request: Request, response: Response){

        const observations = await prisma.observation.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                createdAt: true,
                user: {
                    select: {
                        name: true,
                        registration: true
                    }
                },
                
            },
            orderBy: {
                createdAt: "desc"
            }
        })

        return response.json(observations)
    }

    async remove(request: Request, response: Response){
        const paramsSchema = z.object({
            observation_id: z.string().uuid()
        })

        const {observation_id} = paramsSchema.parse(request.params)

        await prisma.observation.delete({
            where : {
                id: observation_id
            }
        })
        return response.json()
    }
}

export { ObservationsController }