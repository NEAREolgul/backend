import { IsNotEmpty, IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateBidDto {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  auction_id: string;

  @IsString()
  @IsOptional()
  bid_price?: string;
  
  @IsBoolean()
  @IsOptional()
  is_sold?: boolean;
}
