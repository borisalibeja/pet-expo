import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto, UpdateCatDto } from './cat.dto';
import { Cat } from 'src/animals.schema/cats.schema';


@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: number): Promise<Cat> {
    const cat = await this.catModel.findById(id).exec();
    return cat;
  }

  async update(id: number, updateCatDto: UpdateCatDto): Promise<Cat> {
    const updatedCat = await this.catModel.findByIdAndUpdate(id, updateCatDto, { new: true }).exec();
    return updatedCat;
  }

  async remove(id: number): Promise<{ deletedCount?: number }> {
    const result = await this.catModel.deleteOne({ id: id }).exec();
    return result;
  }
}
