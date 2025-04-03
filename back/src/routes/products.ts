import express, { Request, Response, Router } from 'express';
import { createProductController, deletingProduct} from '../controllers/Product.ts';



const router : Router = express.Router();

router
    .post('/', createProductController )

    .delete('/', deletingProduct)
    
export default router;

//67eedceb5c58491553fbbd8b