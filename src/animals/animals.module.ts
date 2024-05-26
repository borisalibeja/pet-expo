import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Bird, BirdSchema } from 'src/schema/birds.schema';
import { Cat, CatSchema } from 'src/schema/cats.schema';
import { Dog, DogSchema } from 'src/schema/dogs.schema';
import { CatController } from './cats/cat.controller';
import { DogController } from './dogs/dog.controller';
import { BirdController } from './birds/bird.controller';
import { CatService } from './cats/cat.service';
import { DogService } from './dogs/dog.service';
import { BirdService } from './birds/bird.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cat.name, schema: CatSchema },
      { name: Dog.name, schema: DogSchema },
      { name: Bird.name, schema: BirdSchema },
    ]),
  ],
  controllers: [CatController, DogController, BirdController],
  providers: [CatService, DogService, BirdService],
  exports: [MongooseModule],
})
export class AnimalsModule {}
