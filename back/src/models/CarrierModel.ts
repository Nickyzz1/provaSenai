import mongoose, { Schema, Document, Date } from 'mongoose';

interface ICarrier extends Document {
      name : string,
      cnpj : string,
      type_transport : string[],
}

const carrierSchema : Schema = new Schema({
    name: { type: String, require: true },
    cnpj: { type: String, require: true },
    type_transport: { type: String, require: true }
});

const Carrier = mongoose.model<ICarrier>('CarrierTb', carrierSchema);

export default Carrier; 
