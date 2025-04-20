/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGameDto {
    @IsString() @IsNotEmpty() game_name: string;
    @IsString() @IsNotEmpty() turf_type: string;
}
