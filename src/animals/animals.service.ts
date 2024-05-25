import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import {  Animal } from "src/animals.schema/animals.schema";


@Injectable()
export class AnimalService {
    constructor(@InjectModel(Animal.name) private animalModel: Model<Animal> ) {}

    async findAll(): Promise<Animal[]> {
        const animals = await this.animalModel.find().exec()
        return animals;
    }
}