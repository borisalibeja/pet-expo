
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Animal, AnimalSchema } from 'src/animals.schema/animals.schema';
import { Bird, BirdSchema } from 'src/animals.schema/birds.schema';
import { Cat, CatSchema } from 'src/animals.schema/cats.schema';
import { Dog, DogSchema } from 'src/animals.schema/dogs.schema';
import { CatController } from './cats/cat.controller';
import { DogController } from './dogs/dog.controller';
import { BirdController } from './birds/bird.controller';
import { CatService } from './cats/cat.service';
import { DogService } from './dogs/dog.service';
import { BirdService } from './birds/bird.service';
import { AnimalController } from './animalls.controller';
import { AnimalService } from './animals.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Bird.name, schema: BirdSchema },
      { name: Cat.name, schema: CatSchema },
      { name: Dog.name, schema: DogSchema },
      {name: Animal.name, schema: AnimalSchema}
    ])
  ],
  controllers: [CatController, DogController, BirdController, AnimalController],
  providers: [CatService, DogService, BirdService, AnimalService],
})
export class AnimalsModule {}
