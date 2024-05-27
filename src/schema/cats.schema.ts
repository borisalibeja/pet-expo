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

CatSchema.add(CatSchema);


CatSchema.set('toObject', { virtuals: true });
CatSchema.set('toJSON', {
    virtuals: true,
    transform: (ret) => {
        ret._id = ret.id;
        delete ret._id;
        delete ret.__v;
    }
});