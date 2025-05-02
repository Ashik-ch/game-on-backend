import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TurfService } from './turf.service';
import { TurfController } from './turf.controller';
import { Turf } from './entities/turf.entity';
import { Game } from 'src/games/entities/game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Turf, Game])],
  providers: [TurfService],
  controllers: [TurfController],
  exports: [TurfService],
})
export class TurfModule { }
