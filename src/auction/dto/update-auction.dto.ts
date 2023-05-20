import { IsOptional, IsString, IsNotEmpty, IsDate } from 'class-validator';

export class UpdateAuctionDto {
  @IsString()
  @IsNotEmpty()
  auction_id: string;

  @IsString()
  @IsOptional()
  auction_title?: string;

  @IsString()
  @IsOptional()
  auction_desc?: string;

  @IsString()
  @IsOptional()
  min_price?: string;

  @IsString()
  @IsOptional()
  purchase_price?: string;
}
