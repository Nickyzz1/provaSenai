import express, { Request, Response, Router } from 'express';
import Customer from '../models/CustomerModel.ts';
import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';
import Product from '../models/ProductmODEL.ts';
import { iProduct } from '../dto/product.ts';
import { isPromise } from 'util/types';

dotenv.config();

export const createProductService = async (prod : iProduct) => {

    try {
        const newProd = new Product({
            name : prod.name,
            price : prod.price,
            stock: prod.stock
        });

        await newProd.save();
    } catch (error) {
        console.log(error)
    }
};

export const updateProductService = async(idProd : string, data : iProduct) => {
    const query = { _id: idProd};
  
    const result = await Product.updateOne(query, { $set: data});

    if(result)
        console.log("atualizado com sucesso")
}

export const deleteProductService = async (data: string) => {
    await Product.findByIdAndDelete(data)
}

