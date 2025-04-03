import { NextFunction, Request, Response } from "express"
import { iOrder } from "../dto/order.ts";

export const orderMid = async (req: Request, res: Response, next: NextFunction) => {
    const data : iOrder = req.body

    if(data == null||data == undefined) {
        res.status(400).send('Informações faltantes!')
    }

    if(data.status == "pendente" || data.status == 'enviado' || data.status == 'entregue' || data.status == 'cancelado' ) {
        next()
    } else {
        res.status(301).send("O campo status deve conter valores apenas entre: penendente, enviado, entregue e cancelado")
    }
}