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

  @IsNotEmpty()
  auction_start: Date;

  @IsNotEmpty()
  auction_deadline: Date;

  @IsString()
  @IsNotEmpty()
  min_price: string;

  @IsString()
  @IsNotEmpty()
  purchase_price: string;
}
