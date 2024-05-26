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

  async findAll(): Promise<Bird[]> {
    return this.birdModel.find().exec();
  }

  async findOne(id: number): Promise<Bird> {
    const bird = await this.birdModel.findById(id).exec();
    return bird;
  }

  async update(id: number, updateBirdDto: UpdateBirdDto): Promise<Bird> {
    const updatedBird = await this.birdModel
      .findByIdAndUpdate(id, updateBirdDto, { new: true })
      .exec();
    return updatedBird;
  }

  async remove(id: number): Promise<{ deletedCount?: number }> {
    const result = await this.birdModel.deleteOne({ id: id }).exec();
    return result;
  }
}
