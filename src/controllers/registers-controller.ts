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
            
        })

        const {name, destination, authorized_by, observation} = bodySchema.parse(request.body)

        
        if(!request.user){
            return response.status(404).json({message: "Usuário nao encontrado!"})
        }

        await prisma.register.create({
            data: {
                name,
                destination,
                authorizedBy: authorized_by,
                observation,
                userId: request.user.id
            }
        })

        return response.json({message: "Ok"})
    }

    async index(request: Request, response: Response){

        const registers = await prisma.register.findMany({
                select: {
                    id: true,
                    name: true,
                    destination: true,
                    authorizedBy: true,
                    observation: true,
                    entry: true,
                    exit: true,
                    
                    

                    vehicle: {
                        select: {
                            plate: true
                        }
                    },

                    user: {
                        select: {
                            name: true,
                            
                        }
                    },
                },
                where: {
                    exit: null
                },

                orderBy: {
                    entry: "desc"
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
            return response.status(404).json({message: "Registro não encontrado!"})
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


    async show(request: Request, response: Response){

        const querySchema = z.object({
            findByName: z.string().optional().default(""),
            findByDate: z.coerce.date().optional(),
        })

        const {findByName, findByDate} = querySchema.parse(request.query)

        let dateFilter = {}

        if(findByDate){
            const startOfDay = new Date(findByDate)
            startOfDay.setUTCHours(0,0,0,0)

            const endOfDay = new Date(findByDate)
            endOfDay.setUTCHours(23,59,59,999)

            dateFilter = {
              entry: {
                gte: startOfDay,
                lte: endOfDay
              }
            }
        }

        const registers = await prisma.register.findMany({
        
                include: {

                    vehicle: {
                        select: {
                            plate: true,
                            brand: true,
                            model: true
                        }
                    },
                    user: {
                        select: {
                            name: true,
                            registration: true
                        }
                    }
                },
    
                where: {
            
                    name: {
                        contains: findByName.trim(),
                        mode: "insensitive"
                    },

                    ...dateFilter
                
                    
                }
            },
            
        )

        return response.json(registers)

    }

}



export{RegistersController}