import {  IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsOptional()
  user_id?: string;

  @IsString()
  @IsOptional()
  user_pw?: string;

  @IsString()
  @IsOptional()
  near_addr?: string;
}
