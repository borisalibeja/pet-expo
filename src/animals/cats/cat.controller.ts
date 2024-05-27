import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  NotFoundException,
  Search,
  Query,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto, UpdateCatDto } from './cat.dto';
import { Cat } from 'src/schema/cats.schema';

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catService.create(createCatDto);
  }

  @Get()
  async findAll(@Query('name') name: string): Promise<Cat[]> {
    return this.catService.findAll(name);
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
    async patchBird(@Param('id') id: number, @Body() updateData: Partial<Cat>): Promise<Cat> {
        return this.catService.updateCat(id, updateData);
    }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    const result = await this.catService.remove(id);
    if (result.deletedCount === 0) {
      throw new NotFoundException('Cat not found');
    }
  }

 
}
