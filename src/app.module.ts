import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017'),
    AnimalsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
