import { Request, Response } from "express";

import { prisma } from "@/database/prisma";
import { AppError } from "@/utils/AppError";
import { z } from "zod";


class ObservationsController {

    async create(request: Request, response: Response){
        const bodySchema = z.object({
            title: z.string(),
            description: z.string(),
            user_id: z.string().uuid()
        })

        const {title, description, user_id} = bodySchema.parse(request.body)

        await prisma.observation.create({
            data: {
                title,
                description,
                userId: user_id
            }
        })

        return response.json()
    }

    async index(request: Request, response: Response){

        const observations = await prisma.observation.findMany({
            select: {
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
}

export { ObservationsController }