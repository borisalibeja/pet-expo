import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, {  Document } from 'mongoose'


@Schema()
export class Animal extends Document {

    @Prop({required: true, unique: true, index: true})
    id: number;

    @Prop({required: true})
    name: string;

    @Prop()
    description?: string;

    @Prop()
    image?: string;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);

AnimalSchema.pre('save', function(next) {
    if (!this._id) {
        this._id = new mongoose.Types.ObjectId();
    }
    next();
});


AnimalSchema.set('toObject', { virtuals: true });
AnimalSchema.set('toJSON', {
    virtuals: true,
    transform: (ret) => {
        ret._id = ret.id;
        delete ret._id;
        delete ret.__v;
    }
});

