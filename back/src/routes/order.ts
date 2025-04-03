import express, { Request, Response, Router } from 'express';
import { orderMid } from '../midwares/order.ts';
import { createOrderController, getOrderStatus } from '../controllers/Order.ts';
import { getOrders } from '../controllers/Order.ts';
import { updateOrdersService } from '../service/orderService.ts';
import { updateOrders } from '../controllers/Order.ts';

const router : Router = express.Router();

router
    .post('/', orderMid, createOrderController)

    .get("/", getOrders )

    .put("/:id", updateOrders)

    .get('status/status=:params', getOrderStatus )
    
export default router;

//67eedceb5c58491553fbbd8b