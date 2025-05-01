import { Request, Response } from "express";

import { prisma } from "@/database/prisma";
import { AppError } from "@/utils/AppError";
import { z } from "zod";

class VehicleController {
    async create(request: Request, response: Response){

        const bodySchema = z.object({
            plate: z.string().trim(),
            brand: z.string().optional(),
            model: z.string().optional(),
            register_id: z.string().uuid()
        })

        const {plate, brand, model, register_id} = bodySchema.parse(request.body)

        await prisma.vehicle.create({
            data: {
                plate,
                brand,
                model,
                registerId: register_id
            }
        })

        return response.json()

    }
}

export { VehicleController }