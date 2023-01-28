import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class UpdatePostDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty()
  id: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  content: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  title: string;
}

export default UpdatePostDto;
