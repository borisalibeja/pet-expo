import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {  Document } from 'mongoose'


@Schema()
export class Animal extends Document {
    @Prop({required: true})
    name: string;

    @Prop({required: true, unique: true })
    id: number;

    @Prop()
    description?: string;

    @Prop()
    image?: string;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);






