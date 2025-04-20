import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TurfService } from './turf.service';
import { TurfController } from './turf.controller';
import { Turf } from './entities/turf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Turf])],
  providers: [TurfService],
  controllers: [TurfController],
  exports: [TurfService],
})
export class TurfModule { }
