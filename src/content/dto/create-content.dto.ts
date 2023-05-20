import { IsNotEmpty, IsOptional, IsString, IsBoolean, IsNumber } from 'class-validator';

export class CreateContentDto {
  @IsString()
  @IsNotEmpty()
  content_id: string;

  @IsString()
  @IsNotEmpty()
  user_id: string;
  
  @IsString()
  @IsNotEmpty()
  content_title: string;

  @IsString()
  @IsOptional()
  content_desc?: string;

  @IsNumber()
  @IsOptional()
  content_price?: number;

  @IsBoolean()
  @IsOptional()
  is_sell?: boolean;

  @IsString()
  @IsOptional()
  content_paint?: string;
}
