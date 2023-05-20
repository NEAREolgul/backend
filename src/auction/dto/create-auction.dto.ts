import { IsNotEmpty, IsOptional, IsString, IsDate } from 'class-validator';

export class CreateAuctionDto {
  @IsString()
  @IsNotEmpty()
  auction_id: string;

  @IsString()
  @IsNotEmpty()
  content_id: string;

  @IsString()
  @IsNotEmpty()
  auction_title: string;

  @IsString()
  @IsOptional()
  auction_desc?: string;

  @IsString()
  @IsNotEmpty()
  min_price: string;

  @IsString()
  @IsNotEmpty()
  purchase_price: string;
}
