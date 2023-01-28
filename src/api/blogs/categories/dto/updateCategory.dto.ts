import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class UpdateCategoryDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  name: string;
}

export default UpdateCategoryDto;
