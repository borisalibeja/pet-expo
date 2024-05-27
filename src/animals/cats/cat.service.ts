import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto, UpdateCatDto } from './cat.dto';
import { Cat } from 'src/schema/cats.schema';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(name?: string): Promise<Cat[]> {
    if (name) {
      return this.catModel.find({name: new RegExp(name, 'i')})
    }
    return this.catModel.find().exec();
  }

  async findOne(id: number): Promise<Cat> {
    const cat = await this.catModel.findOne({id}).exec();
    return cat;
  }

  async updateCat(id: number, updateData: Partial<Cat>): Promise<Cat> {
    const cat = await this.catModel.findOneAndUpdate({ id }, updateData, { new: true }).exec();
    if (!cat) {
        throw new NotFoundException(`Cat with id ${id} not found`);
    }
    return cat;
}

  async remove(id: number): Promise<{ deletedCount?: number }> {
    const result = await this.catModel.deleteOne({ id: id }).exec();
    return result;
  }
}
