/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */

import { IsEmail, IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateTurfDto {

  @IsString()
  @IsNotEmpty()
  id: string;

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

  @IsNotEmpty()
  @IsEnum(['Outdoor', 'Indoor'], {
    each: true,
    message: 'Each turf type must be either Outdoor or Indoor',
  })
  turf_types: string[];

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
