import { Express } from "express";
import express from 'express';
import customer from "./customer.ts";
import order from './order.ts'
import products from './products.ts'

export default function (app: Express) {
    app
        .use(express.json())
        .use('/customers', customer)
        .use('/orders', order )
}

// senhaMaravilhosa:aSabrinaÉLindaEMaravilhosa123