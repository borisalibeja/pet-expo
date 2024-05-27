import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Animal, AnimalSchema} from "./animals.schema";
import mongoose from "mongoose";


@Schema( )
export class Bird extends Animal {

    @Prop()
    species?: string;

    @Prop()
    family?: string;

    @Prop()
    habitat?: string;

    @Prop()
    place_of_found?: string;

    @Prop()
    diet?: string;

    @Prop()
    weight_kg?: number;

    @Prop()
    height_cm?: string;
}


export const BirdSchema = SchemaFactory.createForClass(Bird);

BirdSchema.add(AnimalSchema);

BirdSchema.pre('save', function(next) {
    if (!this._id) {
        this._id = new mongoose.Types.ObjectId();
    }
    next();
});


BirdSchema.set('toObject', { virtuals: true });
BirdSchema.set('toJSON', {
    virtuals: true,
    transform: (ret) => {
        ret._id = ret.id;
        delete ret._id;
        delete ret.__v;
    }
});