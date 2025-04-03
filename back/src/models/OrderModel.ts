import mongoose, { Schema, Document, Date } from 'mongoose';

interface IOrder extends Document {
    clientId : string, // id of client
    listProducts : string[], // lista ids of products
    status : string, 
}

const orderSchema : Schema = new Schema({
    clientId: { type: String, require: true },
    listProducts: { type: String, require: true },
    status: { type: String, require: true },
});

const Order = mongoose.model<IOrder>('OrderTb', orderSchema);

export default Order; 
