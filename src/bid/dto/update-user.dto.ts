import { IsOptional, IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class UpdateBidDto {
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

