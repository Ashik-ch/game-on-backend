/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */

import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateTurfDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  mobile: string;

  @IsString()
  @IsNotEmpty()
  opening_time: string;

  @IsString()
  @IsNotEmpty()
  closing_time: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['Outdoor', 'Indoor'], {
    message: 'Turf type must be either Outdoor or Indoor',
  })
  turf_type: string;

  @IsInt()
  @IsNotEmpty()
  turf_price: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class UpdateTurfDto {
  @IsNotEmpty()
  id: number;

  @IsString()
  name?: string;

  @IsInt()
  mobile?: string;
  @IsString()
  opening_time?: string;
  @IsString()
  closing_time?: string;
  @IsString()
  location?: string;
  @IsString()
  turf_type?: string;
  @IsInt()
  turf_price?: number;
}
