import mongoose, { Schema, Document, Date } from 'mongoose';

interface IDelivery extends Document {
    orderId : string,
    carrierId : string,
    status : string
}

const deliverySchema : Schema = new Schema({
    orderId: { type: String, require: true },
    carrierId: { type: String, require: true },
    status: { type: String, require: false },
});

const Delivery = mongoose.model<IDelivery>('DeliveryTb', deliverySchema);

export default Delivery; 
