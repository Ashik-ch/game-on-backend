import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { DatabaseModule } from './database/database.module';
import { TurfModule } from './turf/turf.module';

@Module({
  imports: [AdminModule, DatabaseModule, TurfModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
