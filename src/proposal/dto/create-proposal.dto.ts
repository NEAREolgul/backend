import { IsNotEmpty, IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateProposalDto {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  content_id: string;

  @IsString()
  @IsOptional()
  proposal_msg?: string;
  
  @IsString()
  @IsOptional()
  proposal_price?: string;

  @IsBoolean()
  @IsOptional()
  is_accept?: boolean;
}
