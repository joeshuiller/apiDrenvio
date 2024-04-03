
import mongoose, {Schema, model, Document} from 'mongoose';

export interface ISpecialProducts extends Document {
    idUsers: string;
    idProducts: string;
    prices:number;
};

const SpecialProductsSchema = new Schema(
    {
        idUsers: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
        idProducts: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        },
        prices: {type: Number, required: true},
        createdAt: {type: Date, default: Date.now}

    }
);

export default model<ISpecialProducts>('SpecialProducts', SpecialProductsSchema);