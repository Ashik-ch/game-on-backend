import { Module } from '@nestjs/common';
import { TurfService } from './turf.service';
import { TurfController } from './turf.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TurfController],
  providers: [TurfService],
})
export class TurfModule {}
