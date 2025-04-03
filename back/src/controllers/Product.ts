import { Request, Response } from "express"
import dotenv from 'dotenv';
import { createProductService } from "../service/productService.ts";
"../service/orderService.ts";
import { deleteProductService } from "../service/productService.ts";
import { updateOrdersService } from "../service/orderService.ts";

dotenv.config();

export const createProductController = async (req: Request, res: Response) => {
    try {
        await createProductService(req.body)
        res.status(200).send("Produto criada com sucesso")
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar ordens de usuário: ', error });
    }
}



export const updateOrders = async(req: Request, res: Response) => {
    await updateOrdersService(req.params.id, req.body)
    res.status(200).send("atualizado com sucesso")
}

export const deletingProduct = async (req: Request, res: Response) => {

    try {
        const deleted = await deleteProductService(req.params.id)
        res.status(200).send("Produto deletesado com sucesso deletado com sucesso!")
      
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }
}