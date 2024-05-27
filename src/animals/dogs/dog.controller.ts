// controllers/dog.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto, UpdateDogDto } from './dog.dto';
import { Dog } from 'src/schema/dogs.schema';
import { Cat } from 'src/schema/cats.schema';

@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Post()
  async create(@Body() createDogDto: CreateDogDto): Promise<Dog> {
    return this.dogService.create(createDogDto);
  }

  @Get()
  async findAll(@Query('name') name: string): Promise<Dog[]> {
    return this.dogService.findAll(name);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Dog> {
    const dog = await this.dogService.findOne(id);
    if (!dog) {
      throw new NotFoundException('Dog not found');
    }
    return dog;
  }

  @Patch(':id')
    async patchBird(@Param('id') id: number, @Body() updateData: Partial<Dog>): Promise<Dog> {
        return this.dogService.updateDog(id, updateData);
    }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    const result = await this.dogService.remove(id);
    if (result.deletedCount === 0) {
      throw new NotFoundException('Dog not found');
    }
  }
}
