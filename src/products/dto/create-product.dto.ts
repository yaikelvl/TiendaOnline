import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';
import { Unit } from '../enums/unit.enum';

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  slug: string;

  @IsEnum(Unit)
  @IsString()
  unit: Unit;

  @IsOptional()
  @IsString({ each: true })
  @IsArray()
  tags: string[];

  @IsOptional()
  @IsBoolean()
  available?: boolean;
}
