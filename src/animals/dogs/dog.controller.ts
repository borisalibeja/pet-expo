// controllers/dog.controller.ts
import { Controller, Get, Post, Body, Param, NotFoundException, Patch, Delete } from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto, UpdateDogDto } from './dog.dto';
import { Dog } from 'src/animals.schema/dogs.schema';

@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Post()
  async create(@Body() createDogDto: CreateDogDto): Promise<Dog> {
    return this.dogService.create(createDogDto);
  }

  @Get()
  async findAll(): Promise<Dog[]> {
    return this.dogService.findAll();
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
  async update(@Param('id') id: number, @Body() updateDogDto: UpdateDogDto): Promise<Dog> {
    const updatedDog = await this.dogService.update(id, updateDogDto);
    if (!updatedDog) {
      throw new NotFoundException('Dog not found');
    }
    return updatedDog;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    const result = await this.dogService.remove(id);
    if (result.deletedCount === 0) {
      throw new NotFoundException('Dog not found');
    }
  }
}
