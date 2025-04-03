import express, { NextFunction, Request, Response, Router } from 'express';
import { iCustomer } from '../dto/customer.ts';
import Customer from '../models/CustomerModel.ts';

export const registerMid = async (req: Request, res : Response,next: NextFunction) => {
    const data : iCustomer = req.body
    if(data == null || data == undefined) {
        res.status(400).send("Informações faltantes")
        return
    }

    if(!data.name || !data.email || !data.password || !data.adress || !data.phone) {
        res.status(400).send("Informações faltantes")
        return
    }

    const user = await Customer.findOne({email: data.email});

    if(user) { 
        res.status(400).send("Usuário já cadastrado")
        return
    }
    next();
}