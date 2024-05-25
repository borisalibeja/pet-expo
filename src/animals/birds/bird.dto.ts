import { IsNotEmpty } from "class-validator";


export class CreateBirdDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    id: number;
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
  