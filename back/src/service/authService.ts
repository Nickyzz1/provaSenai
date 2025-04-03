import express, { Request, Response, Router } from 'express';
import Customer from '../models/CustomerModel.ts';
import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { iCustomer } from '../dto/customer.ts';
import { iLogin } from '../dto/auth.ts';

dotenv.config();

export const registerService = async (user : iCustomer) => {

    try {
        const passHash = CryptoJS.AES.encrypt(user.password, process.env.SECRET as string).toString();

        const newUser = new Customer({
            name : user.name,
            email: user.email,
            password: passHash,
            adress : user.adress,
            phone : user.phone
        });

        await newUser.save();
    } catch (error) {
        console.log(error)
    }
};

export const loginService = async (data: iLogin) => {
   
    const user = await Customer.findOne({ email : data.email });

    const secret = process.env.SECRET;
    
    if(secret) {
        const token = jwt.sign(
            {
                id: user?.id,
            },
            secret,
            {
                expiresIn: '2 days',
            }
        )     
        return token
    }
}

