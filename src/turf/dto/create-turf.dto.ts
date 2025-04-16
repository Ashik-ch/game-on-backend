/* eslint-disable prettier/prettier */
import { IsEmail, IsEnum, IsNotEmpty, IsString, IsArray } from 'class-validator';
import { TurfType } from '@prisma/client';

export class CreateTurfDto {
    @IsNotEmpty()
    @IsString()
    turf_name: string;

    @IsNotEmpty()
    @IsString()
    mobile_number: string;

    @IsNotEmpty()
    @IsString()
    opening_time: string;

    @IsNotEmpty()
    @IsString()
    closing_time: string;

    @IsNotEmpty()
    @IsString()
    turf_address: string;

    @IsArray()
    @IsEnum(TurfType, { each: true })
    turf_types: TurfType[];

    @IsEmail()
    turf_email: string;

    @IsNotEmpty()
    @IsString()
    turf_password: string;
}
