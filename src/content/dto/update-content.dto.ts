import { IsOptional, IsString, IsNotEmpty, IsBoolean, IsNumber } from 'class-validator';

export class UpdateContentDto {
  @IsString()
  @IsNotEmpty()
  content_id: string;

  @IsString()
  @IsOptional()
  user_id?: string;

  @IsString()
  @IsOptional()
  content_title?: string;

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
