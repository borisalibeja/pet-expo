import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Animal} from "./animals.schema";


@Schema({ collection: 'animals' })
export class Cat extends Animal {

    @Prop()
    origin?: string;

    @Prop()
    temperament?: string;

    @Prop()
    colors?: [];

}

export const CatSchema = SchemaFactory.createForClass(Cat).add({ kind: { type: String, default: 'Cat' }  }as any);

