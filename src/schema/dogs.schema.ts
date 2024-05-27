import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Animal} from "./animals.schema";


@Schema()
export class Dog extends Animal {

    @Prop()
    breed_group?: string;

    @Prop()
    size?: string;

    @Prop()
    lifespan?: string;

    @Prop()
    origin?: string;

    @Prop()
    temperament?: string;

    @Prop()
    colors?: [];
}


export const DogSchema = SchemaFactory.createForClass(Dog);

DogSchema.add(DogSchema);


DogSchema.set('toObject', { virtuals: true });
DogSchema.set('toJSON', {
    virtuals: true,
    transform: (ret) => {
        ret._id = ret.id;
        delete ret._id;
        delete ret.__v;
    }
});