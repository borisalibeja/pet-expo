import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Bird } from 'src/schema/birds.schema';
import { CreateBirdDto, UpdateBirdDto } from './bird.dto';

@Injectable()
export class BirdService {
  constructor(@InjectModel(Bird.name) private birdModel: Model<Bird>) {}

  async create(createBirdDto: CreateBirdDto): Promise<Bird> {
    const createdBird = new this.birdModel(createBirdDto);
    return createdBird.save();
  }

  async findAll(name?: string): Promise<Bird[]> {
    if (name) {
      return this.birdModel.find({name: new RegExp(name, 'i')})
    }
    return this.birdModel.find().exec();
  }

  async findOne(id: number): Promise<Bird> {
    const bird = await this.birdModel.findOne({id}).exec();
    return bird;
  }

  async updateBird(id: number, updateData: Partial<Bird>): Promise<Bird> {
    const bird = await this.birdModel.findOneAndUpdate({ id }, updateData, { new: true }).exec();
    if (!bird) {
        throw new NotFoundException(`Bird with id ${id} not found`);
    }
    return bird;
}

  async remove(id: number): Promise<{ deletedCount?: number }> {
    const result = await this.birdModel.deleteOne({ id: id }).exec();
    return result;
  }
}
