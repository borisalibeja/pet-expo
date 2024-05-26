import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Animal} from "./animals.schema";


@Schema()
export class Cat extends Animal {

    @Prop()
    origin?: string;

    @Prop()
    temperament?: string;

    @Prop()
    colors?: [];

}

export const CatSchema = SchemaFactory.createForClass(Cat)

