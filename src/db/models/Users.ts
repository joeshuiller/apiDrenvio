
import {Schema, model, Document} from 'mongoose';

export interface IUsers extends Document {
    name: string;
    surName: string;
    cards:string;
};

const UsersSchema = new Schema(
    {
        name: {type: String, required: true},
        surName: {type: String, required: true},
        cards: {type: String, required: false},
        createdAt: {type: Date, default: Date.now}
    }
);

export default model<IUsers>('Users', UsersSchema);