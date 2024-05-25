import { IsNotEmpty } from "class-validator";

export class CreateDogDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    id: number;
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
  