import { IsNotEmpty, IsOptional, IsString,IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  user_nm: string;
  
  @IsString()
  @IsNotEmpty()
  user_pw: string;

  @IsString()
  @IsOptional()
  near_addr?: string;

  @IsBoolean()
  @IsOptional()
  is_artist?: boolean;
}
