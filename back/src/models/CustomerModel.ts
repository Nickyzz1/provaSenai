import mongoose, { Schema, Document, Date } from 'mongoose';

interface ICustomer extends Document {
      name : string,
      email : string,
      phone : string[],
      password : string,
      adress : string[]
}

const customerSchema : Schema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    phone: { type: String, require: false },
    adress: { type: String, require: false },
});

const Customer = mongoose.model<ICustomer>('CustomerTb', customerSchema);

export default Customer; 
