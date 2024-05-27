import { IsNotEmpty } from "class-validator";

export class CreateDogDto {
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    name: string;
    description?: string;
    image?: string;
    breed_group?: string;
    size?: string;
    lifespan?: string;
    origin?: string;
    temperament?: string;
    colors?: [];
  }
  
  export class UpdateDogDto {
    name?: string;
    description?: string;
    image?: string;
    breed_group?: string;
    size?: string;
    lifespan?: string;
    origin?: string;
    temperament?: string;
    colors?: [];
  }
  