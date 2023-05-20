import { IsOptional, IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsOptional()
  user_nm?: string;
  
  @IsString()
  @IsOptional()
  user_pw?: string;

  @IsString()
  @IsOptional()
  near_addr?: string;

  @IsBoolean()
  @IsOptional()
  is_artist?: string;
}
