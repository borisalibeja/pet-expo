import { IsNotEmpty } from "class-validator";

// dto/create-cat.dto.ts
export class CreateCatDto {
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    name: string;
    
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
  