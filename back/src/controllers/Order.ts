import { Request, Response } from "express"
import dotenv from 'dotenv';
import { createOrder, deleteOrderService} from "../service/orderService.ts";
import { getOrdersService } from "../service/orderService.ts";
import { updateOrdersService } from "../service/orderService.ts";

dotenv.config();

export const createOrderController = async (req: Request, res: Response) => {
    try {
        await createOrder(req.body)
        res.status(200).send("Ordem criada com sucesso")
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar ordens de usuário: ', error });
    }
}


export const getOrders = async(req: Request, res: Response) => {
    try {

        const orders = await getOrdersService()
        res.status(200).send(orders)
        
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}

export const updateOrders = async(req: Request, res: Response) => {
    await updateOrdersService(req.params.id, req.body)
    res.status(200).send("atualizado com sucesso")
}


export const getOrderStatus = async(req: Request, res: Response) => {
    try {

        const orders = await getOrdersService(req.params.params, req.body)
        res.status(200).send(orders)
        
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}



export const deletingOrder = async (req: Request, res: Response) => {

    try {
        const deleted = await deleteOrderService(req.params.id)
        res.status(200).send("Pedido deletesado com sucesso deletado com sucesso!")
      
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }

}