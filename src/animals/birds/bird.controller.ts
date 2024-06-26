import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { BirdService } from './bird.service';
import { CreateBirdDto, UpdateBirdDto } from './bird.dto';
import { Bird } from 'src/schema/birds.schema';

@Controller('birds')
export class BirdController {
  constructor(private readonly birdService: BirdService) {}

  @Post()
  async create(@Body() createBirdDto: CreateBirdDto): Promise<Bird> {
    return this.birdService.create(createBirdDto);
  }

  @Get()
  async findAll(@Query('name') name: string): Promise<Bird[]> {
    return this.birdService.findAll(name);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Bird> {
    const bird = await this.birdService.findOne(id);
    if (!bird) {
      throw new NotFoundException('Bird not found');
    }
    return bird;
  }

  @Patch(':id')
    async patchBird(@Param('id') id: number, @Body() updateData: Partial<Bird>): Promise<Bird> {
        return this.birdService.updateBird(id, updateData);
    }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    const result = await this.birdService.remove(id);
    if (result.deletedCount === 0) {
      throw new NotFoundException('Bird not found');
    }
  }
}
