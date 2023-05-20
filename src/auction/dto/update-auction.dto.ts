import { IsOptional, IsString, IsNotEmpty, IsDate } from 'class-validator';

export class UpdateAuctionDto {
  @IsString()
  @IsNotEmpty()
  auction_id: string;

  @IsString()
  @IsNotEmpty()
  content_id: string;

  @IsString()
  @IsOptional()
  auction_title?: string;

  @IsString()
  @IsOptional()
  auction_desc?: string;

  @IsOptional()
  auction_start?: Date;

  @IsOptional()
  auction_deadline?: Date;

  @IsString()
  @IsOptional()
  min_price?: string;

  @IsString()
  @IsOptional()
  purchase_price?: string;
}
