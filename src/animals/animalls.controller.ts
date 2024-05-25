import { Controller, Get } from "@nestjs/common";
import { AnimalService } from "./animals.service";
import { Animal } from "src/animals.schema/animals.schema";

@Controller('animal')
export class AnimalController {

    constructor(private animalService: AnimalService ) {}

    @Get()
    async findAll(): Promise<Animal[]> {
        return await this.animalService.findAll()
    }
}