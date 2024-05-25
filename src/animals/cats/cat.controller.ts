import { Controller, Get, Post, Patch, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto, UpdateCatDto } from './cat.dto';
import { Cat } from 'src/animals.schema/cats.schema';

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cat> {
    const cat = await this.catService.findOne(id);
    if (!cat) {
      throw new NotFoundException('Cat not found');
    }
    return cat;
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto): Promise<Cat> {
    const updatedCat = await this.catService.update(id, updateCatDto);
    if (!updatedCat) {
      throw new NotFoundException('Cat not found');
    }
    return updatedCat;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    const result = await this.catService.remove(id);
    if (result.deletedCount === 0) {
      throw new NotFoundException('Cat not found');
    }
  }
}
