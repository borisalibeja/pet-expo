import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Animal} from "./animals.schema";


@Schema({ collection: 'animals' })
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


export const BirdSchema = SchemaFactory.createForClass(Bird).add({ kind: { type: String, default: 'Bird' } }as any);

