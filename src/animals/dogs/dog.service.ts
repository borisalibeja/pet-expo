// services/dog.service.ts
import { Injectable } from '@nestjs/common';
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

  async findAll(): Promise<Dog[]> {
    return this.dogModel.find().exec();
  }

  async findOne(id: number): Promise<Dog> {
    const dog = await this.dogModel.findById(id).exec();
    return dog;
  }

  async update(id: number, updateDogDto: UpdateDogDto): Promise<Dog> {
    const updatedDog = await this.dogModel
      .findByIdAndUpdate(id, updateDogDto, { new: true })
      .exec();
    return updatedDog;
  }

  async remove(id: number): Promise<{ deletedCount?: number }> {
    const result = await this.dogModel.deleteOne({ id: id }).exec();
    return result;
  }
}
