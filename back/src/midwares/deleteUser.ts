import express, { NextFunction, Request, Response, Router } from 'express';
import CryptoJS from 'crypto-js';
import { iCustomer } from '../dto/customer.ts';
import Customer from '../models/CustomerModel.ts';

export const deleteUserMid = async (req: Request, res : Response, next: NextFunction)  => {

    try {
        const data : iCustomer = req.body
        const id = req.params.id

        if(!await Customer.findById(id)){
            res.status(404).send("cliente não encontrado")
        }
        // se o user tiver pedidos
        
        next();

    } catch (error) {
        console.log(error)
        res.status(500)
    }
}