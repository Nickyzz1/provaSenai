import Delivery from "../models/DeliveriesModel.ts";
import jwt from "jsonwebtoken";
import Customer from "../models/CustomerModel.ts";
import Order from "../models/OrderModel.ts";
import { iCustomer } from "../dto/customer.ts"; 

export const getOrders = async (data : string) => {
    try {
            // const decoded = jwt.verify(token, process.env.SECRET as string);  
            const user = await Customer.findById((data));
            const userOrders = await Order.findOne({
                where  : {clientId: user?.id}})
            return userOrders
        } catch{
            console.log("erro ao buscar pedidos do usuário")
        }
}

export const getAllUsers = () => {
    try {
        return Customer.find()
        
    } catch (error) {
        console.log("internal server error")
    }

}

export const deleteCustomer = async (data : string) => {
    try {

        console.log(data)

        const customer = await Customer.findByIdAndDelete(data)

    } catch (error) {
        console.log("erro ao excluir usuário")
    }
}

