import { Request, Response } from "express"
import dotenv from 'dotenv';
import { iCustomer } from '../dto/customer.ts';
import { getOrders } from "../service/customerService.ts";
import { deleteCustomer } from "../service/customerService.ts";
import { getAllUsers } from "../service/customerService.ts";

dotenv.config();

export const getCustomerOrdersController = async (req: Request, res: Response) => {
    try {
        const orders = await getOrders(req.params.id)
        res.status(201).send(orders).json
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar ordens de usuário: ', error });
    }
}

export const getCustomers = async(req: Request, res: Response) => {
    try {

        const customers = await getAllUsers();
        res.status(200).send(customers)
        
    } catch (error) {
        console.log("internal server error")
    }
}

export const deletingCustomer = async (req: Request, res: Response) => {

    try {
        const deleted = await deleteCustomer(req.params.id)
        
        res.status(200).send("Usuário deletado com sucesso!")
      
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal server error")
    }

}