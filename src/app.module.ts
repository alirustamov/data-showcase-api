import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CovidController } from './covid/covid.controller';
import { StatsController } from './stats/stats.controller';
import { StatsService } from './services/stats.service';

@Module({
  imports: [],
  controllers: [AppController, StatsController, CovidController],
  providers: [AppService, StatsService],
})
export class AppModule {}
