import { IsNotEmpty } from "class-validator";

// dto/create-cat.dto.ts
export class CreateCatDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    id: number;
    description?: string;
    image?: string;
    origin?: string;
    temperament?: string;
    colors?: [];
  }
  
  export class UpdateCatDto {
    name?: string;
    description?: string;
    image?: string;
    origin?: string;
    temperament?: string;
    colors?: [];
  }
  