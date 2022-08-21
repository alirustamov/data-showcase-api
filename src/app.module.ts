import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CovidController } from './covid/covid.controller';
import { StatsController } from './stats/stats.controller';
import { StatsService } from './services/stats.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [AppController, StatsController, CovidController],
  providers: [AppService, StatsService],
})
export class AppModule {}
