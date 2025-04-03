import express, { Request, Response, Router } from 'express';
import Order from '../models/OrderModel.ts';
import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { iOrder } from '../dto/order.ts';

dotenv.config();

export const createOrder= async (order : iOrder) => {

    try {
        const newOrder = new Order({
            clientId : order.clientId,
            listProducts : order.listProducts,
            status: order.status
        });

        await newOrder.save();
    } catch (error) {
        console.log(error)
    }
};

export const getOrdersService= async () => 
{
    return await Order.find() 
}

export const updateOrdersService = async(idOrder : string, data : iOrder) => {

    // await Order.findByIdAndUpdate(data.id)

    const query = { _id: idOrder};
  
    const result = await Order.updateOne(query, { $set: data});

    if(result)
        console.log("atualizado com sucesso")

} 

export const getOrdersToStatusService = async (status : string, data: iOrder ) => {
    const prod = await Order.find()
    for(let i in prod){
        console.log(i)
    }
    return prod
}

export const deleteOrderService = async (data : string) => {
    try {

        await Order.findByIdAndDelete(data)

    } catch (error) {
        console.log("erro ao excluir usuário")
    }
}

//67eed8a21c817b4cc06b11ea
