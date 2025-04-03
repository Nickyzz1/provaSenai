import mongoose, { Schema, Document, Date } from 'mongoose';

interface IProduct extends Document {
      name : string,
      price : number,
      stock : number,
}

const productSchema : Schema = new Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    stock : { type: Number, require: true }
});

const Product = mongoose.model<IProduct>('ProductTb', productSchema);

export default Product; 
