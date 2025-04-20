import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { Game } from './entities/game.entity';
import { Turf } from 'src/turf/entities/turf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Game, Turf])],
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule { }
