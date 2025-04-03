import express, { NextFunction, Request, Response, Router } from 'express';
import CryptoJS from 'crypto-js';
import { iCustomer } from '../dto/customer.ts';
import Customer from '../models/CustomerModel.ts';

export const loginMid = async (req: Request, res : Response, next: NextFunction)  => {

    try {
        const data : iCustomer = req.body
        if(data == null || data == undefined) 
            res.status(400).send("Informações faltantes")
        
        const user = await Customer.findOne({email: data.email});
    
        if(!user)
            res.status(404).send({ message: "Usuário não encontrado" });
    
        if (!process.env.SECRET) 
            res.status(500).send("A chave não está configurada.");
       
       
       if(user && process.env.SECRET) {

           const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET);
           const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
           if (decryptedPassword !== data.password) 
                res.status(401).send("Senha incorreta.");
       }
        next();

    } catch (error) {
        console.log(error)
        res.status(500)
    }
}