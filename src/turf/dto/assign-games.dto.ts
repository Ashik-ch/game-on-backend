import { ArrayNotEmpty, IsArray, IsUUID } from 'class-validator';

export class AssignGamesDto {
    @IsUUID("all", { each: true })
    @IsArray() @ArrayNotEmpty() games: string[];
}
