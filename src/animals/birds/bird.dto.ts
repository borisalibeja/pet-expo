import { IsNotEmpty } from "class-validator";


export class CreateBirdDto {
    @IsNotEmpty()
    id: number;
    @IsNotEmpty()
    name: string;
    description?: string;
    image?: string;
    species?: string;
    family?: string;
    habitat?: string;
    place_of_found?: string;
    diet?: string;
    weight_kg?: number;
    height_cm?: string;
  }
  
  export class UpdateBirdDto {
    name?: string;
    description?: string;
    image?: string;
    species?: string;
    family?: string;
    habitat?: string;
    place_of_found?: string;
    diet?: string;
    weight_kg?: number;
    height_cm?: string;
  }
  