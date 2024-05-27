// services/dog.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDogDto, UpdateDogDto } from './dog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Dog } from 'src/schema/dogs.schema';
import { Model } from 'mongoose';

@Injectable()
export class DogService {
  constructor(@InjectModel(Dog.name) private dogModel: Model<Dog>) {}

  async create(createDogDto: CreateDogDto): Promise<Dog> {
    const createdDog = new this.dogModel(createDogDto);
    return createdDog.save();
  }

  async findAll(name?: string): Promise<Dog[]> {
    if (name) {
      return this.dogModel.find({name: new RegExp(name, 'i')})
    }
    return this.dogModel.find().exec();
  }

  async findOne(id: number): Promise<Dog> {
    const dog = await this.dogModel.findOne({id}).exec();
    return dog;
  }

  async updateDog(id: number, updateData: Partial<Dog>): Promise<Dog> {
    const dog = await this.dogModel.findOneAndUpdate({ id }, updateData, { new: true }).exec();
    if (!dog) {
        throw new NotFoundException(`Dog with id ${id} not found`);
    }
    return dog;
}

  async remove(id: number): Promise<{ deletedCount?: number }> {
    const result = await this.dogModel.deleteOne({ id: id }).exec();
    return result;
  }
}
