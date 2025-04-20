/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsArray, IsNotEmpty } from 'class-validator';

export class CreateTurfDto {
    @IsString() @IsNotEmpty() turf_name: string;
    @IsString() @IsNotEmpty() mobile_number: string;
    @IsString() @IsNotEmpty() opening_time: string;
    @IsString() @IsNotEmpty() closing_time: string;
    @IsString() @IsNotEmpty() turf_address: string;
    @IsArray() @IsNotEmpty() turf_types: string[];
    @IsEmail() @IsNotEmpty() turf_email: string;
    @IsString() @IsNotEmpty() turf_password: string;
}
